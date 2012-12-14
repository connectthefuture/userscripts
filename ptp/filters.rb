module MyFilters
  # a.user.js -> a.meta.js
  class MetaFilter < Rake::Pipeline::Filter
    def initialize(&blk)
      blk ||= proc{|input| input.sub(/user\.js$/, "meta.js") }

      super &blk
    end

    def generate_output(inputs, output)
      inputs.each do |input|
        content = ""

        while line=input.readline 
          content << line

          if line =~ %r~==/UserScript==~
            break
          end
        end

        output.write content
      end
    end
  end

  module Helpers
    # a.user.js -> a.meta.js
    def meta(&blk)
      filter MyFilters::MetaFilter, &blk
    end
  end
end

module Rake # ::Pipeline::FileWrapper
  class Pipeline
    class FileWrapper
      def readline
        if "".respond_to?(:encode)
          @file ||= File.open(fullpath, :encoding => encoding)
        else
          @file ||= File.open(fullpath)
        end

        line = @file.readline

        if "".respond_to?(:encode) && !line.valid_encoding?
          raise EncodingError, "The file at the path #{fullpath} is not valid UTF-8. Please save it again as UTF-8."
        end

        line
      end
    end
  end
end


Rake::Pipeline::DSL::PipelineDSL.send(:include, MyFilters::Helpers)

