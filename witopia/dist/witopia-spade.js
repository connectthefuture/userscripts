minispade.register('./core', "(function() {// ==UserScript==\n// @name          witopia\n// @description\t\twitopia\n// @version\t\t\t\t0.1\n// @author        Guten <ywzhaifei@gmail.com> http://www.GutenYe.com\n// @homepage      https://github.com/GutenYe/witopia\n// @id            witopia@gutenye.com\n// @updateURL     https://raw.github.com/GutenYe/witopia/master/dist/witopia.meta.js\n//\n// @require       https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js\n// @require       https://raw.github.com/GutenYe/pdjs/master/dist/pd.js\n//\n// @match         https://my.witopia.net/*\n// ==/UserScript==\n;\n\n$(\"#sidebar-left ul\").append($('<li><a href=\"https://www.witopia.net/?faq-item=openvpn-ssl-gateway-locations\">Locations</a></li>'));\n\n})();\n//@ sourceURL=./core");minispade.register('witopia', "(function() {minispade.require(\"./core\");\n\n})();\n//@ sourceURL=witopia");