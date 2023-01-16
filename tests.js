const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');
const css = require('css');
const fs = require("fs");
chai.use(require('chai-dom'));
require('jsdom-global')();

describe('index.html', () => {
  beforeEach((done) => {
    JSDOM.fromFile('index.html', { resources: "usable"})
    .then((dom) => {
      global.document = dom.window.document
    })
  .then(done, done);
  });

  describe("head", () => {
    it("exists'", () => {
      let head = document.querySelector('head')
      expect(head).to.exist
    });

    it("has link to CSS styles", () => {
      let head = document.querySelector('head')
      expect(head).to.contain('link')
    });
  });

  describe("CSS styles link", () => {
    it("has attribute rel eqals to stylesheet'", () => {
      let link = document.querySelector('head link')
      expect(link).to.have.attribute('rel', 'stylesheet')
    });

    it("has attribute href equals to styles.css'", () => {
      let link = document.querySelector('head link')
      expect(link).to.have.attribute('href', 'styles.css')
    });
  });

  describe("body", () => {
    it("exists", () => {
      let body = document.querySelector('body')
      expect(body).to.exist
    });

    it("contains h1 with text 'Adam Smith'", () => {
      let header = document.querySelector('body h1')
      expect(header).to.have.text('Adam Smith')
    });

    it("contains a paragraph with id that equals #bio", () => {
      let bio = document.querySelector('body p#bio')
      expect(bio).to.exist
    });

    describe("#bio paragraph", () => {
      it("contains a text including 'Lorem ipsum'", () => {
        let bio = document.querySelector('body p#bio')
        expect(bio).to.contain.text('Lorem ipsum')
      });

      it("contains a link to Linkedin main page", () => {
        let link = document.querySelector('body p#bio a')
        expect(link).to.have.attribute('href', 'https://www.linkedin.com')
      });
    });

    it("contains h2 with text 'Education history'", () => {
      let header = document.querySelectorAll('body h2')
      expect(header).to.contain.text('Education history')
    });

    it("contains a div with id that equals #education", () => {
      let education = document.querySelector('body div#education')
      expect(education).to.exist
    });

    describe("#education div", () => {
      it("contains an ordered list", () => {
        let list = document.querySelector('body div#education ol')
        expect(list).to.exist
      });

      it("contains at least one item on the ordered list", () => {
        let list = document.querySelector('body div#education ol li')
        expect(list).to.exist
      });
    });

    it("contains h2 with text 'Projects'", () => {
      let header = document.querySelectorAll('body h2')
      expect(header).to.contain.text('Projects')
    });

    it("contains a div with id that equals #projects", () => {
      let projects = document.querySelector('body div#projects')
      expect(projects).to.exist
    });

    describe("#projects div", () => {
      it("is empty", () => {
        let projects = document.querySelector('body div#projects')
        expect(projects).to.be.empty
      });

      it("has no text", () => {
        let projects = document.querySelector('body div#projects')
        expect(projects).to.have.trimmed.text('')
      });
    });

    it("contains h2 with text 'Social media'", () => {
      let header = document.querySelectorAll('body h2')
      expect(header).to.contain.text('Social media')
    });

    it("contains a div with id that equals #social", () => {
      let social = document.querySelector('body div#social')
      expect(social).to.exist
    });

    describe("#social div", () => {
      it("contains an unordered list", () => {
        let list = document.querySelector('body div#social ul')
        expect(list).to.exist
      });

      it("contains a link to Facebook main page as an item on the unordered list", () => {
        let links = document.querySelectorAll('body div#social ul li a')
        expect(links[0]).to.have.attribute('href', 'https://www.facebook.com')
      });
      
      it("Facebook link has text 'Facebook'", () => {
        let links = document.querySelectorAll('body div#social ul li a')
        expect(links[0]).to.have.text('Facebook')
      });

      it("Facebook link has class called social-media-links", () => {
        let links = document.querySelectorAll('body div#social ul li a')
        expect(links[0]).to.have.class('social-media-links')
      });

      it("contains a link to Instagram main page as an item on the unordered list", () => {
        let links = document.querySelectorAll('body div#social ul li a')
        expect(links[1]).to.have.attribute('href', 'https://www.instagram.com')
      });
      
      it("Instagram link has text 'Instagram'", () => {
        let links = document.querySelectorAll('body div#social ul li a')
        expect(links[1]).to.have.text('Instagram')
      });

      it("Instagram link has class called social-media-links", () => {
        let links = document.querySelectorAll('body div#social ul li a')
        expect(links[1]).to.have.class('social-media-links')
      });

      it("contains a link to Twitter main page as an item on the unordered list", () => {
        let links = document.querySelectorAll('body div#social ul li a')
        expect(links[2]).to.have.attribute('href', 'https://www.twitter.com')
      });
      
      it("Twitter link has text 'Twitter'", () => {
        let links = document.querySelectorAll('body div#social ul li a')
        expect(links[2]).to.have.text('Twitter')
      });

      it("Twitter link has class called social-media-links", () => {
        let links = document.querySelectorAll('body div#social ul li a')
        expect(links[2]).to.have.class('social-media-links')
      });

    });
  });
});

describe('styles.css', function() {
  beforeEach((done) => {
    const csstFileText = fs.readFileSync("./styles.css").toString('utf-8');
    const parsedCssFile = css.parse(csstFileText, { source: 'styles.css' });
    global.styles = parsedCssFile.stylesheet.rules.filter(rule => rule.type === 'rule');
    done();
  });

  describe("body", () => {
    beforeEach((done) => {
      let bodyRules = styles.filter(rule => rule.selectors.includes('body'));
      global.bodyProperties = bodyRules.map(({ declarations }) => declarations).flat();    
      done();
    });

    it('has purple #6f23ff as the background color', function() {
      let backgroundColor = bodyProperties.find(declaration => declaration.property === 'background-color');
      expect(backgroundColor.value).to.equal('#6f23ff');
    });

    it('has "Montserrat", sans-serif as font family', function() {
      let fontFamily = bodyProperties.find(declaration => declaration.property === 'font-family');
      expect(fontFamily.value).to.equal("'Montserrat', sans-serif");
    });

    it('has top and button margins equal 50px and left and right margins equal 100px', function() {
      let margin = bodyProperties.find(declaration => declaration.property === 'margin');
      expect(margin.value).to.equal('50px 100px 50px 100px');
    });

    it('has white as the text color', function() {
      let color = bodyProperties.find(declaration => declaration.property === 'color');
      expect(color.value).to.equal('white');
    });

    it('has centered text', function() {
      let textAlign = bodyProperties.find(declaration => declaration.property === 'text-align');
      expect(textAlign.value).to.equal('center');
    });
  });

  describe("unordered and ordered list s display", () => {
    it('ul has "inline-block" set as display', function() {
      let ulRules = styles.filter(rule => rule.selectors.includes('ul'));
      let ulProperties = ulRules.map(({ declarations }) => declarations).flat();

      let display = ulProperties.find(declaration => declaration.property === 'display');
      expect(display.value).to.equal('inline-block');
    });

    it('ol has "inline-block" set as display', function() {
      let olRules = styles.filter(rule => rule.selectors.includes('ol'));
      let olProperties = olRules.map(({ declarations }) => declarations).flat();

      let display = olProperties.find(declaration => declaration.property === 'display');
      expect(display.value).to.equal('inline-block');
    });
  });

  describe("header 1 font family", () => {
    it('h1 has "Domine", serif set as font family', function() {
      let headerRules = styles.filter(rule => rule.selectors.includes('h1'));
      let headerProperties = headerRules.map(({ declarations }) => declarations).flat();

      let fontFamily = headerProperties.find(declaration => declaration.property === 'font-family');
      expect(fontFamily.value).to.equal("'Domine', serif");
    });
  });

  describe("header 2 styling", () => {
    beforeEach((done) => {
      let headerTwoRules = styles.filter(rule => rule.selectors.includes('h2'));
      global.headerTwoProperties = headerTwoRules.map(({ declarations }) => declarations).flat();    
      done();
    });


    it('h2 has top pading set to 40px', function() {
      let paddingTop = headerTwoProperties.find(declaration => declaration.property === 'padding-top');
      expect(paddingTop.value).to.equal('40px');
    });

    it('h2 has white 0.5px solid border on the top', function() {
      let borderTop = headerTwoProperties.find(declaration => declaration.property === 'border-top');
      expect(borderTop.value).to.equal('0.5px solid white');
    });
  });

  describe("links colors", () => {
    it('bio links are aqua blue', function() {
      let bioLinkRules = styles.filter(rule => rule.selectors.includes('#bio a'));
      let bioLinkProperties = bioLinkRules.map(({ declarations }) => declarations).flat();

      let color = bioLinkProperties.find(declaration => declaration.property === 'color');
      expect(color.value).to.equal('aqua');
    });

    it('.social-media-links class make links #ffd540 yellow', function() {
      let socialMediaRules = styles.filter(rule => rule.selectors.includes('.social-media-links'));
      let socialMediaProperties = socialMediaRules.map(({ declarations }) => declarations).flat();

      let color = socialMediaProperties.find(declaration => declaration.property === 'color');
      expect(color.value).to.equal('#ffd540');
    });
  });
});
