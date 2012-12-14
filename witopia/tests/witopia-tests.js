
jasmine.getFixtures().fixturesPath = "/spec/fixtures";

$.fn.outerHTML = function() {
  return $(this).clone().wrap('<div></div>').parent().html();
};
