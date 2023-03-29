/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, m as maybeRenderHead, f as renderComponent } from '../astro.ac5b0f18.mjs';
import 'html-escaper';
/* empty css                              */
const $$Astro$a = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		
		<link rel="icon" type="image/svg+xml" href="/img/Favicon.png">
		
		<link rel="stylesheet" href="/css/index.css">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>

        <meta property="og:type" content="website">
        <meta property="og:site_name"${addAttribute(title, "content")}>
        <meta property="og:description"${addAttribute(description, "content")}>
        <meta name="theme-color" content="#E74C3C">

		<meta name="twitter:image" content="https://someboringnerd.xyz/img/Favicon.png">
		
		<title>${title}</title>
	${renderHead($$result)}</head>
	<body>
		${renderSlot($$result, $$slots["default"])}
	</body></html>`;
}, "/home/sbn/Documents/GitHub/someboringnerd.xyz/src/layouts/Layout.astro");

const $$Astro$9 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<header style="text-align:center;padding-top: 1%;">
            <div class="header">
                <a href="/">Landing</a>
                <a href="/projects" title="list of projects and presentation">Projects</a>
                <a href="/blog" title="Want to know what I'm up to ? Check this out then !">Blog</a>
                <a href="/social" title="My social medias if you want to talk with me">Socials</a>
                <a href="/about" title="wanna learn more about me ? here you go">About</a>
            </div>
        </header>`;
}, "/home/sbn/Documents/GitHub/someboringnerd.xyz/src/components/Header.astro");

const $$Astro$8 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead($$result)}<footer style="text-align:center; padding-top: 2%;">
            <div class="footer">
                <a href="https://git.someboringnerd.xyz/someboringnerd/someboringnerd.xyz" target="_blank">source code</a>
                <a href="/oss">Open Source</a>
                <a href="/credit">credit</a>
                <a href="/rss" title="RSS flux for the blog">rss</a><br>
                <a href="mailto:contact@someboringnerd.xyz">You can contact me by mail : contact@someboringnerd.xyz</a>
            </div>
        </footer>`;
}, "/home/sbn/Documents/GitHub/someboringnerd.xyz/src/components/Footer.astro");

const $$Astro$7 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index;
  let birth_day = (/* @__PURE__ */ new Date("2/1/2004")).getFullYear();
  (/* @__PURE__ */ new Date("2/1/2017")).getFullYear;
  let today = (/* @__PURE__ */ new Date()).getFullYear();
  let Year = today - birth_day;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome (\uFF20\uFF3E\u25E1\uFF3E)", "description": "Welcome to my website <3" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main>
		${renderComponent($$result2, "Header", $$Header, {})}
			<article class="paragraph">
				<h1 class="text-4xl">Welcome to my website</h1><br>
				<p class="text-base">
					Hi, I'm SomeBoringNerd, a ${Year} year old french dev that does a lot of things.
					My main activity online is making video games and mods but I do a lot of other things.<br>
					<br>
					For more info on the subject, you can check <a href="/projects">this page</a>
				</p>
			</article>
			<article class="paragraph">
				<h1 class="text-3xl">Main projects</h1><br>
				<section>
					<p>
						While I work on a lot of projects, here are my most important one : <br><br>
						<a href="/wh">WaifuHax</a> : 1.19.4 Minecraft utility mod for anarchy servers<br><br>
						<a href="/sa">SpaceAnarchy</a> : a minecraft anarchy server<br><br>
						<a href="/ttd">Through The Dark</a> : a video game that currently development<br><br>
					</p>
				</section>
			</article>
		${renderComponent($$result2, "Foot", $$Footer, {})}
	</main>` })}`;
}, "/home/sbn/Documents/GitHub/someboringnerd.xyz/src/pages/index.astro");

const $$file$6 = "/home/sbn/Documents/GitHub/someboringnerd.xyz/src/pages/index.astro";
const $$url$6 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file$6,
	url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Card;
  let { href, title, body, image, external_redirect } = Astro2.props;
  if (external_redirect == void 0) {
    external_redirect = "_parent";
  }
  return renderTemplate`${maybeRenderHead($$result)}<li class="link-card astro-DOHJNAO5">
	<a${addAttribute(href, "href")}${addAttribute(external_redirect, "target")} class="astro-DOHJNAO5">
		<img${addAttribute(image, "src")} height="250px" width="250px" class="astro-DOHJNAO5">
		<h2 class="text-lg astro-DOHJNAO5">
			${title}
		</h2>
		<p class="text-base astro-DOHJNAO5">
			${body}
		</p>
	</a>
</li>`;
}, "/home/sbn/Documents/GitHub/someboringnerd.xyz/src/components/Card.astro");

const $$Astro$5 = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects (\uFF20\uFF3E\u25E1\uFF3E)", "description": "Wanna see what I've been up to ?" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main>
		${renderComponent($$result2, "Header", $$Header, {})}
		<div class="paragraph">
			<h1 class="text-6xl">My projects</h1>
			<p class="text-xl">You can find here most of the public projects I'm working on (◕ ‿ ◕)</p>
		</div>
		<div class="p-8">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
			  <div class="p-4 rounded-md flex items-center justify-center h-full">
				${renderComponent($$result2, "Card", $$Card, { "title": "TTD", "body": "Adventure game where you alternate between reality and dream. Coming soon maybe.", "href": "/ttd", "image": "/img/ttd/logo.png" })}
				</div>
				<div class="p-4 rounded-md flex items-center justify-center h-full">
					${renderComponent($$result2, "Card", $$Card, { "title": "WaifuHax", "body": "Minecraft ''QOL'' mod for anarchy servers. Full of weeb jokes and LGBT stuff", "href": "/wh", "image": "/img/WaifuHax/logo.png" })}
				</div>
				<div class="p-4 rounded-md flex items-center justify-center">
					${renderComponent($$result2, "Card", $$Card, { "title": "SpaceAnarchy", "body": "Minecraft 1.19.4 true survival, no rules, no ban, do whatever you want", "href": "https://reddit.com/r/SpaceAnarchy", "image": "/img/server-icon.png" })}
				</div>
			</div>
		</div>
		${renderComponent($$result2, "Foot", $$Footer, {})}
	</main>` })}`;
}, "/home/sbn/Documents/GitHub/someboringnerd.xyz/src/pages/projects.astro");

const $$file$5 = "/home/sbn/Documents/GitHub/someboringnerd.xyz/src/pages/projects.astro";
const $$url$5 = "/projects";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Projects,
	file: $$file$5,
	url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro();
const $$Social = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Social;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Social (\uFF20\uFF3E\u25E1\uFF3E)", "description": "Wanna contact me / check out my things ?" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main>
		${renderComponent($$result2, "Header", $$Header, {})}
		<div class="paragraph">
			<h1 class="text-6xl">My socials networks</h1>
			<p class="text-xl">I have a few of them (◕ ‿ ◕)</p>
		</div>
		<div class="p-8">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
				<div class="p-4 rounded-md flex items-center justify-center h-full">
					${renderComponent($$result2, "Card", $$Card, { "title": "Reddit", "body": "Sometime I post about WaifuHax", "href": "https://reddit.com/u/SomeBoringNerd", "image": "/img/ttd/reddit.png", "external_redirect": "_blank" })}
				</div>
				<div class="p-4 rounded-md flex items-center justify-center h-full">
					${renderComponent($$result2, "Card", $$Card, { "title": "Github", "body": "most of my code is hosted here", "href": "/wh", "image": "/img/logo/github.png", "external_redirect": "_blank" })}
				</div>
				<div class="p-4 rounded-md flex items-center justify-center">
					${renderComponent($$result2, "Card", $$Card, { "title": "Gitea", "body": "My github but sorted properly", "href": "https://git.someboringnerd.xyz", "image": "/img/logo/gitea.png", "external_redirect": "_blank" })}
				</div>
				<div class="p-4 rounded-md flex items-center justify-center h-full">
					${renderComponent($$result2, "Card", $$Card, { "title": "@SomeBoringNerd", "body": "Gamedev channel", "href": "https://youtube.com/@SomeBoringNerd", "image": "/img/logo/youtube.png", "external_redirect": "_blank" })}
				</div>
				<div class="p-4 rounded-md flex items-center justify-center h-full">
					${renderComponent($$result2, "Card", $$Card, { "title": "@MorganePlayVideoGames", "body": "Gaming channel", "href": "/wh", "image": "/img/logo/youtube.png", "external_redirect": "_blank" })}
				</div>
				<div class="p-4 rounded-md flex items-center justify-center">
					${renderComponent($$result2, "Card", $$Card, { "title": "@SomeBoringDev", "body": "Anything that's code", "href": "https://youtube.com/@SomeBoringDev", "image": "/img/logo/youtube.png", "external_redirect": "_blank" })}
				</div>
			</div>
		</div>
		${renderComponent($$result2, "Foot", $$Footer, {})}
	</main>` })}`;
}, "/home/sbn/Documents/GitHub/someboringnerd.xyz/src/pages/social.astro");

const $$file$4 = "/home/sbn/Documents/GitHub/someboringnerd.xyz/src/pages/social.astro";
const $$url$4 = "/social";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Social,
	file: $$file$4,
	url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$About;
  let birth_day = (/* @__PURE__ */ new Date("2/1/2004")).getFullYear();
  let tech_year = (/* @__PURE__ */ new Date("2/1/2017")).getFullYear();
  let today = (/* @__PURE__ */ new Date()).getFullYear();
  let Year = today - birth_day;
  let Year_Since_Tech = today - tech_year;
  let pronouns;
  const data = await fetch("https://pronoundb.org/api/v1/lookup?platform=discord&id=283205890474115072").then(
    (response) => response.json()
  );
  pronouns = textFriendlyPronouns(getFormatedPronoun(data.pronouns));
  function getFormatedPronoun(pr) {
    switch (pr) {
      case "hh":
        return "he/him";
      case "hi":
        return "he/it";
      case "hs":
        return "he/she";
      case "ht":
        return "he/they";
      case "ih":
        return "it/him";
      case "ii":
        return "it/its";
      case "is":
        return "it/she";
      case "it":
        return "it/they";
      case "shh":
        return "she/he";
      case "sh":
        return "she/her";
      case "si":
        return "she/it";
      case "st":
        return "she/they";
      case "th":
        return "they/him";
      case "ti":
        return "they/its";
      case "ts":
        return "they/she";
      case "tt":
        return "they/they";
      case "unspecified":
      case "any":
        return "anything you want, I dont care";
      case "ask":
        return "%ASK_ME%";
      case "avoid":
        return "%DONT_USE_PRONOUNS%";
      default:
        return "none";
    }
  }
  function textFriendlyPronouns(pr) {
    if (pr == "%ASK_ME%") {
      pr = "If you want to know my pronouns, ask me. Also I";
    } else if (pr == "avoid") {
      pr = "I'd rather be called by my name and I";
    } else {
      pr = "my current pronouns are " + pr + " and I";
    }
    return pr;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About me (\u2267\u25E1\u2266)", "description": "Wanna learn a bit more about me ? \u0669(\u25D5\u203F\u25D5\uFF61)\u06F6" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main>
		${renderComponent($$result2, "Header", $$Header, {})}
        <article class="paragraph">
            <h1 class="text-4xl">Hello there ! ヽ(&gt;∀ &lt;☆)ノ</h1>
            <br>
            <p>
                I'm SomeBoringNerd, I'm ${Year} years old autistic trans-fem, I'm a french student that studies programming.
                ${pronouns} and go by the name Morgane. I enjoy anime, video games (especially Team Fortress 2 and Minecraft), and learning new things in programmation.
                <br><br>
                I have picked up tech when I was about 12, back then I first learned a bit of Python, HTML and CSS. ${Year_Since_Tech} years later, I write code mostly for fun,
                I b-became a UwU Awch Winyux usew and I'm enjoying every second of it.
                <br><br>
                I mostly code in Java, JavaScript and, at a somewhat correct level, C and C++.
                I also love self-hosting and own 3 servers, the detail of it can be found on <a href="https://git.someboringnerd.xyz/SomeBoringNerd/Infrastructure" target="_blank">my gitea account</a>
            </p>
        </article>
		${renderComponent($$result2, "Foot", $$Footer, {})}
	</main>` })}`;
}, "/home/sbn/Documents/GitHub/someboringnerd.xyz/src/pages/about.astro");

const $$file$3 = "/home/sbn/Documents/GitHub/someboringnerd.xyz/src/pages/about.astro";
const $$url$3 = "/about";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file$3,
	url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Blog;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Work in progress (\uFF1B\uFFE3\u0414\uFFE3)", "description": "(\uFF1B\uFFE3\u0414\uFFE3)" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, {})}${maybeRenderHead($$result2)}<center>
        <img src="https://raw.githubusercontent.com/cat-milk/Anime-Girls-Holding-Programming-Books/master/Typescript/Morgan_le_Fay_Typescript_pros.png">
    </center>${renderComponent($$result2, "Footer", $$Footer, {})}` })}`;
}, "/home/sbn/Documents/GitHub/someboringnerd.xyz/src/pages/blog.astro");

const $$file$2 = "/home/sbn/Documents/GitHub/someboringnerd.xyz/src/pages/blog.astro";
const $$url$2 = "/blog";

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Blog,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$404;
  (/* @__PURE__ */ new Date("2/1/2004")).getFullYear();
  (/* @__PURE__ */ new Date("2/1/2017")).getFullYear;
  (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 (\u21C0\u2038\u21BC\u2036)", "description": "nothing here... (\u21C0\u2038\u21BC\u2036)" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main>
		${renderComponent($$result2, "Header", $$Header, {})}
            <!-- I will not ask why TEXT align center other things -->
            <div style="text-align:center">
                <img src="https://http.cat/404">
            </div>
		${renderComponent($$result2, "Foot", $$Footer, {})}
	</main>` })}`;
}, "/home/sbn/Documents/GitHub/someboringnerd.xyz/src/pages/404.astro");

const $$file$1 = "/home/sbn/Documents/GitHub/someboringnerd.xyz/src/pages/404.astro";
const $$url$1 = "/404";

const _page5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Rss = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Rss;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Work in progress (\uFF1B\uFFE3\u0414\uFFE3)", "description": "(\uFF1B\uFFE3\u0414\uFFE3)" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, {})}${maybeRenderHead($$result2)}<center>
        <img src="https://raw.githubusercontent.com/cat-milk/Anime-Girls-Holding-Programming-Books/master/Typescript/Morgan_le_Fay_Typescript_pros.png">
    </center>${renderComponent($$result2, "Footer", $$Footer, {})}` })}`;
}, "/home/sbn/Documents/GitHub/someboringnerd.xyz/src/pages/rss.astro");

const $$file = "/home/sbn/Documents/GitHub/someboringnerd.xyz/src/pages/rss.astro";
const $$url = "/rss";

const _page6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Rss,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b, _page3 as c, _page4 as d, _page5 as e, _page6 as f };
