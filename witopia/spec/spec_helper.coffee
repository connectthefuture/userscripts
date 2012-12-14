jasmine.getFixtures().fixturesPath = "/spec/fixtures"

$.fn.outerHTML = ->
  $(this).clone().wrap('<div></div>').parent().html()
