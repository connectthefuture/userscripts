# lib/*.coffee
watch %r~lib/.*\.coffee~ do |m|
  build
end

trap :QUIT do
  build
end

def build
  run "bundle exec rakep"
end

def run(cmd)
  puts cmd
  system cmd
end
