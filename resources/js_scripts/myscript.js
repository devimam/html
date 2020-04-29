//Title: HTML5 Documentation - Click to Learn
//Author: Mohammad Imam Hossain
//Date: 2020-04-29
//All rights reserved.


//hover effect
function over(cname){
    console.log("Enter : "+cname);
    var elms=document.getElementsByClassName(cname);
    
    for(var i=0;i<elms.length;i++){
        elms[i].style="padding:3px;border:1px solid rgb(26, 255, 255);text-decoration:none;"
    }
}

function out(cname){
    console.log("Leave :"+cname);
    var elms=document.getElementsByClassName(cname);
    
    for(var i=0;i<elms.length;i++){
        elms[i].style="background-color:none;text-decoration:none;"
    }
}

function help(){
    document.getElementById("mtitle").innerHTML="How to Use this Website?";
    
    document.getElementById("mbody").innerHTML="<div style='text-align:center;'><iframe src='https://www.youtube.com/embed/HHMWocHBH5o' width='740' height='400' allow='autoplay' allowfullscreen ></iframe></div>";
}

//documentations
function dtd(){
    document.getElementById("mtitle").innerHTML="HTML5 <code>DOCTYPE</code> Declaration";
    
    document.getElementById("mbody").innerHTML="The Document Type Declaration(DTD) <code>&lt;!DOCTYPE html&gt;</code> needs to be present at the beginning of a document that uses the HTML syntax. It triggers no-quirks mode in browser.<br/><br/>In HTML, the <code>DOCTYPE</code> is case insensitive. HTML5 defines three modes:<ul><li>Quirks mode</li><li>Limited quirks mode</li><li>No-quirks mode</li></ul>There are some differences in the way documents are visually rendered in each of the modes; and to ensure the most standards compliant rendering, it is important to ensure no-quirks mode is used. This DTD triggers no-quirks mode in browsers.<br/><br/>For more visit <a href='https://dev.w3.org/html5/html-author/#doctype-declaration'>here</a>";
}

function htmlroot(){
    document.getElementById("mtitle").innerHTML="<code>html</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>html</code> element represents the root of an HTML document. It contains a <code>head</code> element followed by a <code>body</code> element.<br/><br/><table class='table table-striped'><thead><tr><th>Sample Script</th></tr></thead><tbody><tr><td><code>&lt;!DOCTYPE html&gt;<br/>&lt;html lang=&quot;en&quot;&gt;<br/>&nbsp;&nbsp;&lt;head&gt;...&lt;/head&gt;<br/>&nbsp;&nbsp&lt;body&gt;...&lt;/body&gt;<br/>&lt;/html&gt;</code></td></tr></tbody></table><br/>Authors are encouraged to specify a <code>lang</code> attribute on the root <code>html</code> element, giving the document's language. This aids speech synthesis tools to determine what pronunciations to use, translation tools to determine what rules to use, and so forth.<br/><br/>For more visit <a href='https://html.spec.whatwg.org/#the-html-element'>here</a>";
}

function langatr(){
    document.getElementById("mtitle").innerHTML="<code>lang</code> Attribute";
    
    document.getElementById("mbody").innerHTML="The <code>lang</code> attribute specifies the primary language for the HTML element's contents and for any of the element's attributes that contain text.<br/><br/>Setting the attribute to the empty string indicates that the primary language is unknown. If this attribute is omitted from an element, then the language of this element is the same as the language of its parent element, if any.<br/><br/>Language Codes List: <a href='https://www.w3schools.com/tags/ref_language_codes.asp'>link</a><br/>Country Codes List: <a href='https://www.w3schools.com/tags/ref_country_codes.asp'>link</a><br/><br/>User agents may use the element's language to determine proper processing or rendering (e.g. in the selection of appropriate fonts or pronunciations, for dictionary selection, or for the user interfaces of form controls such as date pickers).<br/><br/>For more visit <a href='https://html.spec.whatwg.org/#attr-lang'>here</a>";
}

function headelm(){
    document.getElementById("mtitle").innerHTML="<code>head</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>head</code> element represents a collection of metadata for the Document, like the document's character encoding, title, scripts, style sheets etc.<br/><br/><table class='table table-striped'><thead><tr><th>Sample Script</th></tr></thead><tbody><tr><td><code>&lt;!DOCTYPE html&gt;<br/>&lt;html lang=&quot;en&quot;&gt;<br/>&nbsp;&nbsp;&lt;head&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;A document with a short head&lt;/title&gt;<br/>&nbsp;&nbsp;&lt;/head&gt;<br/>&nbsp;&nbsp&lt;body&gt;...&lt;/body&gt;<br/>&lt;/html&gt;</code></td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-head-element'>here</a>";
}

function metaelm(){
    document.getElementById("mtitle").innerHTML="<code>meta</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>meta</code> element represents various kinds of metadata that cannot be expressed using the <code>title, base, link, style, and script</code> elements.<br/><br/>The <code>meta</code> element can represent document-level metadata with the <code>name</code> attribute, pragma directives with the <code>http-equiv</code> attribute, and the file's character encoding declaration when an HTML document is serialized to string form (e.g. for transmission over the network or for disk storage) with the <code>charset</code> attribute.<br/><br/><table class='table table-striped'><thead><tr><th>Attribute List</th><th>Description</th></tr></thead><tbody><tr><td><code>charset</code></td><td>The <code>charset</code> attribute specifies the character encoding used by the document. This is a character encoding declaration. If the attribute is present, its value must be an ASCII case-insensitive match for the string <b>'utf-8'</b>.</td></tr><tr><td><code>name</code></td><td>The <code>name</code> and <code>content</code> attributes can be used together to provide document metadata in terms of name-value pairs, with the <code>name</code> attribute giving the metadata name, and the <code>content</code> attribute giving the value.</td></tr><tr><td><code>http-equiv</code></td><td>The <code>http-equiv</code> attribute defines a pragma directive. The attribute is named <code>http-equiv</code>(alent) because all the allowed values are names of particular HTTP headers. These HTTP headers are: <code>content-language, content-type, default-style, refresh, set-cookie, x-ua-compatible, content-secutiry-policy</code>.</td></tr><tr><td><code>content</code></td><td>The <code>content</code> attribute contains the value for the <code>http-equiv or name</code> attribute, depending on which is used.</td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-meta-element'>here</a>";
}

function metacharsetatr(){
    document.getElementById("mtitle").innerHTML="<code>charset</code> Attribute";
    
    document.getElementById("mbody").innerHTML="The <code>charset</code> attribute specifies the character encoding used by the document [when the HTML document is serialized to string form e.g. for transmission over the network or for disk storage]. This is a character encoding declaration. If the attribute is present, its value must be an ASCII case-insensitive match for the string <b>'utf-8'</b>.<br/><br/>For more visit <a href='https://html.spec.whatwg.org/#attr-meta-charset'>here</a>";
}

function metahttpequivatr(){
    document.getElementById("mtitle").innerHTML="<code>http-equiv</code> Attribute";
    
    document.getElementById("mbody").innerHTML="The <code>http-equiv</code> attribute defines a pragma directive. The attribute is named <code>http-equiv</code>(alent) because all the allowed values are names of particular HTTP headers.<br/><br/><table class='table table-striped'><thead><tr><th>Attribute Value</th><th>Description</th></tr></thead><tbody><tr><td><code>refresh</code></td><td>This instruction specifies: <ul><li>The number of seconds until the page should be reloaded - only if the <code>content</code> attribute contains a positive integer.</li><li>The number of seconds until the page should redirect to another - only if the <code>content</code> attribute contains a positive integer followed by the string <i>';url='</i>, and a valid URL.</li></ul></td></tr><tr><td>Other values</td><td><code><ul><li>content-language</li><li>content-type</li><li>default-style</li><li>set-cookie</li><li>x-ua-compatible</li><li>content-secutiry-policy</li></ul></td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#attr-meta-http-equiv'>here</a>";
}

function metanameatr(){
    document.getElementById("mtitle").innerHTML="<code>name</code>(meta) Attribute";
    
    document.getElementById("mbody").innerHTML="The <code>meta</code> element has a <code>name</code> attribute that sets document metadata. Document metadata is expressed in terms of name-value pairs, the <code>name</code> attribute on the <code>meta</code> element giving the name, and the <code>content</code> attribute on the same element giving the value.<br/><br/><table class='table table-striped'><thead><tr><th>Attribute Value</th><th>Description</th></tr></thead><tbody><tr><td><code>application-name</code></td><td>A short free-form string giving the name of the Web application that the page represents.</td></tr><tr><td><code>author</code></td><td>A free-form string giving the name of one of the page's authors.</td></tr><tr><td><code>description</code></td><td>A free-form string that describes the page. The value must be appropriate for use in a directory of pages, e.g. in a search engine.</td></tr><tr><td><code>keywords</code></td><td>It's value must be a set of comma-separated tokens, each of which is a keyword relevant to the page.For example,<br/><code>&lt;meta name=&quot;keywords&quot; content=&quot;british,type face,font,fonts,highway,highways&quot;&gt;</code></td></tr><tr><td><code>viewport</code></td><td>It gives hint about the size of the initial size of the viewport. Used by mobile devices only.</td></tr><tr><td>Other values</td><td><code>generator, referrer, theme-color</code> etc.</td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#attr-meta-name'>here</a>";
}

function titleelm(){
    document.getElementById("mtitle").innerHTML="<code>title</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>title</code> element represents the document's title or name that is shown in a browser's title bar or a page's tab. It only contains text; tags within the element are ignored. There must be no more than one title element per document.<br/><br/>Authors should use titles that identify their documents even when they are used out of context, for example in a user's history or bookmarks, or in search results.<br/><br/><table class='table table-striped'><thead><tr><th>Sample Script</th><th>Output</th></tr></thead><tbody><tr><td><code>&lt;title&gt;HTML Documentation&lt;/title&gt;</code></td><td><img src='resources/images/titleelm.png' style='width:450px;'></td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-title-element'>here</a>";
}

function baseelm(){
    document.getElementById("mtitle").innerHTML="<code>base</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>base</code> element specifies the base URL(<code>href</code> attribute) to use for all <i>relative URLs</i> in a document and the name of the default browsing context(<code>target</code> attribute) for the purposes of following hyperlinks. There can be only one base element in a document. A base element must have either an <code>href</code> attribute, a <code>target</code> attribute, or both.<br/><br/><table class='table table-striped'><thead><tr><th>Sample Script</th></tr></thead><tbody><tr><td><code>&lt;!DOCTYPE html&gt;<br/>&lt;html lang=&quot;en&quot;&gt;<br/>&nbsp;&nbsp;&lt;head&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;This is an example for the &amp;lt;base&amp;gt; element&lt;/title&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;base href=&quot;https://www.example.com&quot;&gt;<br/>&nbsp;&nbsp;&lt;/head&gt;<br/>&nbsp;&nbsp;&lt;body&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Visit the &lt;a href=&quot;/archives.html&quot;&gt;archives&lt;/a&gt;.&lt;/p&gt;<br/>&nbsp;&nbsp;&lt;/body&gt;<br/>&lt;/html&gt;</code><br/><br/>The link in this example would be a link to <a href='#'>https://www.example.com/archives.html</a></td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-base-element'>here</a>";
}

function basehrefatr(){
    document.getElementById("mtitle").innerHTML="<code>href</code>(base) Attribute";
    
    document.getElementById("mbody").innerHTML="<code>href</code> attribute specifies the base URL to be used throughout the document for relative URLs. Absolute and relative URLs are allowed.<br/><br/><table class='table table-striped'><thead><tr><th>Sample Script</th></tr></thead><tbody><tr><td><code>&lt;!DOCTYPE html&gt;<br/>&lt;html lang=&quot;en&quot;&gt;<br/>&nbsp;&nbsp;&lt;head&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;This is an example for the &amp;lt;base&amp;gt; element&lt;/title&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;base href=&quot;https://www.example.com&quot;&gt;<br/>&nbsp;&nbsp;&lt;/head&gt;<br/>&nbsp;&nbsp;&lt;body&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Visit the &lt;a href=&quot;/archives.html&quot;&gt;archives&lt;/a&gt;.&lt;/p&gt;<br/>&nbsp;&nbsp;&lt;/body&gt;<br/>&lt;/html&gt;</code><br/><br/>The link in this example would be a link to <a href='#'>https://www.example.com/archives.html</a></td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#attr-base-href'>here</a>";
}

function targetatr(){
    document.getElementById("mtitle").innerHTML="<code>target</code> Attribute";
    
    document.getElementById("mbody").innerHTML="The <code>target</code> attribute, if specified, must contain a valid <i>browsing context name or keyword</i>, which specifies which browsing context is to be used as the default when hyperlinks and forms in the Document cause navigation.<br/><br/><table class='table table-striped'><thead><tr><th>Browsing Context Name</th><th>Description</th></tr></thead><tbody><tr><td><code>_self</code></td><td>Load the resulting document into the same browsing context as the current one. (This is the default.)</td></tr><tr><td><code>_parent</code></td><td>Load the result into the parent browsing context of the current one. If there is no parent, behaves the same way as <code>_self</code>.</td></tr><tr><td><code>_top</code></td><td> Load the result into the topmost browsing context. If there is no parent, behaves the same way as <code>_self</code>.</td></tr><tr><td><code>_blank</code></td><td>Load the result into a new, unnamed browsing context.</td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#attr-base-href'>here</a>";
}

function linkelm(){
    document.getElementById("mtitle").innerHTML="<code>link</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>link</code> element allows authors to link their document to other resources.<br/><br/>The destination of the link is given by the <code>href</code> attribute, which must be present and must contain a valid non-empty URL potentially surrounded by spaces. The types of link indicated (the relationships) are given by the value of the <code>rel</code> attribute.<br/><br/>A link element can occur either in the <code>head</code> or <code>body</code> element, depending on whether it has a link type that is body-ok. For example, the <code>stylesheet</code> link type is body-ok, and therefore <code>&lt;link rel=&quot;stylesheet&quot;&gt;</code> is permitted in the body.<br/><br/><table class='table table-striped'><thead><tr><th>Attribute List</th><th>Description</th></tr></thead><tbody><tr><td><code>href</code></td><td>Address of the hyperlink. Two categories of links can be created using the link element: Links to external resources and hyperlinks.</td></tr><tr><td><code>rel</code></td><td>Relationship between the document containing the hyperlink and the destination resource. The possible supported values are <code>alternate, dns-prefetch, icon, modulepreload, next, pingback, preconnect, prefetch, preload, prerender, search, and stylesheet</code>.</td></tr><tr><td><code>type</code></td><td>The <code>type</code> attribute gives the MIME type of the linked resource. It is purely advisory. The value must be a valid MIME type string.</td></tr><tr><td><code>crossorigin</code></td><td>How the element handles crossorigin requests.</td></tr><tr><td><code>integrity</code></td><td>The <code>integrity</code> metadata used in subresource integrity checks.</td></tr><tr><td><code>media</code></td><td>If the link is a hyperlink then the <code>media</code> attribute is purely advisory, and describes for which media the document in question was designed. The default, if the <code>media</code> attribute is omitted, is 'all', meaning that by default links apply to all media.</td></tr><tr><td><code>hreflang</code></td><td>The language of the linked resource.</td></tr><tr><td><code>referrerpolicy</code></td><td>Referrer policy for fetches initiated by the element.</td></tr><tr><td><code>sizes</code></td><td>Sizes of the icons(for <code>rel='icon'</code>).</td></tr><tr><td><code>imagesrcset</code></td><td>Images to use in different situations (e.g., high-resolution displays, small monitors, etc.).</td></tr><tr><td><code>imagesizes</code></td><td>Image sizes for different page layouts.</td></tr><tr><td><code>as</code></td><td>Potential destination for a preload request(for <code>rel='preload'</code>).</td></tr><tr><td><code>color</code></td><td>Color to use when customizing a site's icon(for <code>rel='mask-icon'</code>).</td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-link-element'>here</a>";
}

function hrefatr(){
    document.getElementById("mtitle").innerHTML="<code>href</code> Attribute";
    
    document.getElementById("mbody").innerHTML="This attribute specifies the URL of the linked resource. A URL can be absolute or relative.<br/><br/>For more visit <a href='https://html.spec.whatwg.org/#attr-link-href'>here</a>";
}

function linkrelatr(){
    document.getElementById("mtitle").innerHTML="<code>rel</code> Attribute";
    
    document.getElementById("mbody").innerHTML="Relationship between the document containing the hyperlink and the destination resource.<br/><br/><table class='table table-striped'><thead><tr><th>Attribute Value</th><th>Description</th></tr></thead><tbody><tr><td><code>stylesheet</code></td><td>It is an external resource that imports a style sheet.</td></tr><tr><td><code>icon</icon></td><td>It is an external link that imports an icon to represent the current document.</td></tr><tr><td><code>prerender</code></td><td>It is an external resource that specifies that the user agent must preemptively fetch the target resource and process it in a way that helps deliver a faster response in the future.</td></tr><tr><td>Other possible values</td><td><code>search, prev, preload, prefetch, preconnect, pingback, next, license, modulepreload, help,  dns-prefetch, bookmark, author, canonical, alternate</code></td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#linkTypes'>here</a>";
}

function linktypeatr(){
    document.getElementById("mtitle").innerHTML="<code>type</code> Attribute";
    
   document.getElementById("mbody").innerHTML="The <code>type</code> attribute gives the <b>MIME type</b> of the linked resource. It is purely advisory. The value must be a valid MIME type string.<br/><br/><table class='table table-striped'><thead><tr><th>Attribute Value</th><th>Description</th></tr></thead><tbody><tr><td><code>text/css</code></td><td>Represents cascading style sheets(.css).</td></tr><tr><td><code>text/html</code></td><td>Represents hypertext markup language(.html) files.</td></tr><tr><td><code>text/plain</code></td><td>Represents text files.</td></tr><tr><td><code>text/javascript</code></td><td>Represents javscript modules(.js).</td></tr><tr><td><code>application/pdf</code></td><td>Represents adobe portable document format(.pdf) files.</td></tr><tr><td><code>application/json</code></td><td>Represents json format files(.json).</td></tr><tr><td><code>image/jpeg</code></td><td>Represents jpeg images(.jpeg, .jpg).</td></tr></tbody></table>For more visit <a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types'>here</a>"; 
}

function styleelm(){
    document.getElementById("mtitle").innerHTML="<code>style</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>style</code> element allows authors to embed CSS style sheets in their documents. The <code>style</code> element is one of several inputs to the styling processing model. The element does not represent content for the user.<br/><br/><table class='table table-striped'><thead><tr><th>Attribute List</th><th>Description</th></tr></thead><tbody><tr><td><code>media</code></td><td>The <code>media</code> attribute says which media the styles apply to. The value must be a valid media query list. The user agent must apply the styles when the media attribute's value matches the environment and the other relevant conditions apply, and must not apply them otherwise.</td></tr><tr><td><code>title</code></td><td>The <code>title</code> attribute on style elements defines CSS style sheet sets. If the style element has no title attribute, then it has no title; the title attribute of ancestors does not apply to the style element.</td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-style-element'>here</a>";
}

function cssscript(){
    document.getElementById("mtitle").innerHTML="Embedded <code>css</code> Script";
    
    document.getElementById("mbody").innerHTML="Some sample <code>CSS</code> scripts.<code>CSS (Cascading Style Sheets)</code> is used to style and lay out web pages — for example, to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features.<br/><br/>For more visit <a href='https://cssreference.io/'>here</a>";
}

function script1elm(){
    document.getElementById("mtitle").innerHTML="<code>script</code> Element";
    
    document.getElementById("mbody").innerHTML="The HTML <code>script</code> element is used to embed or reference executable code; this is typically used to embed or refer to JavaScript code. The <code>script</code> element allows authors to include dynamic script and data blocks in their documents.<br/><br/><table class='table table-striped'><thead><tr><th>Attribute List</th><th>Description</th></tr></thead><tbody><tr><td><code>src</code></td><td>Address of the resource.</td></tr><tr><td><code>type</code></td><td>Type of the script.</td></tr><tr><td><code>async</code></td><td>Execute script when available, without blocking while fetching.</td></tr><tr><td><code>defer</code></td><td>Defer script execution.</td></tr><tr><td>Other attributes</td><td><code>nomodule, crossorigin, integrity, referrerpolicy.</code></td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-script-element'>here</a>";
}

function script1srcatr(){
    document.getElementById("mtitle").innerHTML="<code>src</code>(script) Attribute";
    
    document.getElementById("mbody").innerHTML="Classic scripts and module scripts can be imported from an external file using the <code>src</code> attribute, which if specified gives the URL of the external script resource to use. If <code>src</code> is specified, it must be a valid non-empty URL potentially surrounded by spaces.<br/><br/>For more visit <a href='https://html.spec.whatwg.org/#attr-script-src'>here</a>";
}

function script1asyncdeferatr(){
    document.getElementById("mtitle").innerHTML="<code>async & defer</code> Attribtues";
    
    document.getElementById("mbody").innerHTML="For classic scripts, if the <code>async</code> attribute is present, then the classic script will be fetched in parallel to parsing and evaluated as soon as it is available (potentially before parsing completes).<br/><br/>If the async attribute is not present but the <code>defer</code> attribute is present, then the classic script will be fetched in parallel and evaluated when the page has finished parsing.<br/><br/>If neither attribute is present, then the script is fetched and evaluated immediately, blocking parsing until these are both complete.<br/><br/><img src='resources/images/asyncdefer.png' style='width:760px;height:200px;'><br/><br/>For more visit <a href='https://html.spec.whatwg.org/#attr-script-async'>here</a>";
}

function comment(){
    document.getElementById("mtitle").innerHTML="HTML Commenting";
    
    document.getElementById("mbody").innerHTML="<b>Comments</b> must have the following format:<ol><li>Starts with the string <code>'&lt;!--'</code>.</li><li>Optionally, text in the middle, with the additional restriction that the text must not start with the string '&gt;', nor start with the string '-&gt;', nor contain the strings '&lt;!--', '--&gt;', or '--!&gt;', nor end with the string '&lt;!-'.</li><li>Ends with the string <code>'--&gt;'</code>.</li></ol>For more visit <a href='https://html.spec.whatwg.org/#comments'>here</a>";
}

function jscontent(){
    document.getElementById("mtitle").innerHTML="Embedded <code>JavaScript</code>";
    
    document.getElementById("mbody").innerHTML="Some sample <code>JavaScript</code> scripts. <code>JavaScript</code> is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved.<br/><br/>For more visit <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>here</a>";
}
    
function bodyelm(){
    document.getElementById("mtitle").innerHTML="<code>body</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>body</code> element represents the contents of the document. In conforming documents, there is only one body element.<br/><br/><table class='table table-striped'><thead><tr><th>Sample Script</th></tr></thead><tbody><tr><td><code>&lt;!DOCTYPE HTML&gt;<br/>&lt;html lang=&quot;en&quot;&gt;<br/>&nbsp;&nbsp;&lt;head&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Online or offline?&lt;/title&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;script&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;function update(online) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;document.getElementById('status').textContent =online ? 'Online' : 'Offline';<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/script&gt;<br/>&nbsp;&nbsp;&lt;/head&gt;<br/>&nbsp;&nbsp;&lt;body ononline=&quot;update(true)&quot;<br/>&nbsp;&nbsp;&nbsp;&nbsp;onoffline=&quot;update(false)&quot;<br/>&nbsp;&nbsp;&nbsp;&nbsp;onload=&quot;update(navigator.onLine)&quot;&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;You are: &lt;span id=&quot;status&quot;&gt;(Unknown)&lt;/span&gt;&lt;/p&gt;<br/>&nbsp;&nbsp;&lt;/body&gt;<br/>&lt;/html&gt;</code></td></tr></tbody></table><br/>The possible attributes of <code>body</code> element is listed below:<br/><br/><table class='table table-striped'><thead><tr><th>Attribute List</th><th>Description</th></tr></thead><tbody><tr><td><code>onafterprint<br/>onbeforeprint</code></td><td><ul><li>Function to call after the user has printed the document.</li><li>Function to call when the user requests printing of the document.</li></ul></td></tr><tr><td><code>onbeforeunload<br/>onunload<br/>onload<br/>onerror</code></td><td><ul><li>Function to call when the document is about to be unloaded.</li><li>Function to call when the document is going away.</li><li>Function to call when the document has finished loading.</li><li>Function to call when the document fails to load properly.</li></ul></td></tr><tr><td><code>onblur<br/>onfocus</code></td><td><ul><li>Function to call when the document loses focus</li><li>Function to call when the document receives focus.</li></ul></td></tr><tr><td><code>ononline<br/>onoffline<br/>onresize</code></td><td><ul><li>Function to call when network communication has been restored.</li><li>Function to call when network communication has failed.</li><li>Function to call when the document has been resized.</li></ul></td></tr><tr><td>Other attributes</td><td><code>onundo, onredo, onpopstate, onstorage, onmessage, onlanguagechange, onhashchange.</code></td></tr><tr></tbody></table><br/>For more visit <a href='https://html.spec.whatwg.org/#the-body-element'>here</a>";
}    

function bodyatr(){
    document.getElementById("mtitle").innerHTML="<code>body</code> Attributes";
    
    document.getElementById("mbody").innerHTML="The possible attributes of <code>body</code> element is listed below:<br/><br/><table class='table table-striped'><thead><tr><th>Attribute List</th><th>Description</th></tr></thead><tbody><tr><td><code>onafterprint<br/>onbeforeprint</code></td><td><ul><li>Function to call after the user has printed the document.</li><li>Function to call when the user requests printing of the document.</li></ul></td></tr><tr><td><code>onbeforeunload<br/>onunload<br/>onload<br/>onerror</code></td><td><ul><li>Function to call when the document is about to be unloaded.</li><li>Function to call when the document is going away.</li><li>Function to call when the document has finished loading.</li><li>Function to call when the document fails to load properly.</li></ul></td></tr><tr><td><code>onblur<br/>onfocus</code></td><td><ul><li>Function to call when the document loses focus</li><li>Function to call when the document receives focus.</li></ul></td></tr><tr><td><code>ononline<br/>onoffline<br/>onresize</code></td><td><ul><li>Function to call when network communication has been restored.</li><li>Function to call when network communication has failed.</li><li>Function to call when the document has been resized.</li></ul></td></tr><tr><td>Other attributes</td><td><code>onundo, onredo, onpopstate, onstorage, onmessage, onlanguagechange, onhashchange.</code></td></tr><tr></tbody></table><br/>For more visit <a href='https://html.spec.whatwg.org/#the-body-element'>here</a>";
}

function headerelm(){
    document.getElementById("mtitle").innerHTML="<code>header</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>header</code> element represents a group of introductory or navigational aids.<br/><br/>A <code>header</code> element is intended to usually contain the section's heading (an <code>h1–h6</code> element or an <code>hgroup</code> element), but this is not required. The <code>header</code> element can also be used to wrap a section's table of contents, a search form, or any relevant logos.<br/><br/><table class='table table-striped'><thead><tr><th>Sample Script</th></tr></thead><tbody><tr><td><img src='resources/images/headerelm.png' style='width:720px;height:500px;'></td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-header-element'>here</a>";
}

function hgroupelm(){
    document.getElementById("mtitle").innerHTML="<code>hgroup</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>hgroup</code> element represents the heading of a <code>section</code>, which consists of all the <code>h1–h6</code> element children of the <code>hgroup</code> element.<br/><br/>The element is used to group a set of <code>h1–h6</code> elements when the heading has multiple levels, such as subheadings, alternative titles, or taglines.<br/><br/>The point of using <code>hgroup</code> is to prevent the multiple heading elements from creating a separate section for their own in any outline and instead cause the contents of the multiple headings to be shown in rendered output from the outline algorithm in some way to indicate that they are not the title of a separate section but instead just a group of titles of a section.<br/><br/><table class='table table-striped'><thead><tr><th>Sample Script</th></tr></thead><tbody><tr><td><code>&lt;hgroup&gt;<br/>&nbsp;&nbsp;&lt;h1&gt;The Avengers&lt;/h1&gt;<br/>&nbsp;&nbsp;&lt;h2&gt;Infinity war&lt;/h1&gt;<br/>&lt;/hgroup&gt;</td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-hgroup-element'>here</a>";
}

function helm(){
    document.getElementById("mtitle").innerHTML="<code>h1-h6</code> Elements";
    
    document.getElementById("mbody").innerHTML="The <code>h1-h6</code> elements represent headings for their sections. These elements have a rank given by the number in their name. The <code>h1</code> element is said to have the highest rank, the <code>h6</code> element has the lowest rank, and two elements with the same name/number have equal rank.<br/><br/><table class='table table-striped'><thead><tr><th>Sample Script</th></tr></thead><tbody><tr><td><img src='resources/images/headingelm.png' style='width:720px;height:450px;'></td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements'>here</a>";
}

function navelm(){
    document.getElementById("mtitle").innerHTML="<code>nav</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>nav</code> element represents a section of a page that links to other pages or to parts within the page: a section with navigation links.<br/><br/><table class='table table-striped'><thead><tr><th>Sample Script</th></tr></thead><tbody><tr><td><img src='resources/images/navelm.png' style='width:850px; height:750px;'></td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-nav-element'>here</a>";
}

function listelm(){
    document.getElementById("mtitle").innerHTML="HTML <code>ul, ol, dl</code> Elements";
    
    document.getElementById("mbody").innerHTML="<h5>Unordered List(<code>&lt;ul&gt;</code>)</h5>The <code>ul</code> element represents a list of items, where the order of the items is not important — that is, where changing the order would not materially change the meaning of the document.<br/><br/><table class='table table-striped'><thead><tr><th>Sample Script</th><th>Output</th></tr></thead><tbody><tr><td><code>...<br/>&lt;ul&gt;<br/>&nbsp;&nbsp;&lt;li&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;Bangaldesh<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Dhaka&lt;/li&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Rajshahi&lt;/li&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Comilla&lt;/li&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;<br/>&nbsp;&nbsp;&lt;/li&gt;<br/>&nbsp;&nbsp;&lt;li&gt;Singapore&lt;/li&gt;<br/>&nbsp;&nbsp;&lt;li&gt;USA&lt;/li&gt;<br/>&nbsp;&nbsp;...<br/>&lt;/ul&gt;<br/>...</code></td><td>...<ul><li>Bangaldesh<ul><li>Dhaka</li><li>Rajshahi</li><li>Comilla</li>...</ul></li><li>Singapore</li><li>USA</li>... </ul>...</td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-ul-element'>here</a><br/><br/><h4>Ordered List(<code>ol</code>)</h4>The <code>ol</code> element represents a list of items, where the items have been intentionally ordered, such that changing the order would change the meaning of the document. The items of the list are the <code>li</code> element child nodes of the <code>ol</code> element, in tree order.<br/>Three attributes:<ul><li><code>reversed</code> - A boolean attribute. If present, it indicates that the list is a descending list (..., 3, 2, 1). If the attribute is omitted, the list is an ascending list (1, 2, 3, ...) by default.</li><li><code>start</code> - This attribute, if present, must be a valid integer. It is used to determine the starting value of the list.</li><li><code>type</code> - This type attribute can be used to specify the kind of marker to use in the list. For example, <code>1, a, A, i, I</code></li></ul><table class='table table-striped'><thead><tr><th>Sample Script</th><th>Output</th></tr></thead><tbody><tr><td><code>...<br/>&lt;ol&gt;<br/>&nbsp;&nbsp;&lt;li&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;Bangaldesh<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;ol type='a'&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Dhaka&lt;/li&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Rajshahi&lt;/li&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Comilla&lt;/li&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ol&gt;<br/>&nbsp;&nbsp;&lt;/li&gt;<br/>&nbsp;&nbsp;&lt;li&gt;Singapore&lt;/li&gt;<br/>&nbsp;&nbsp;&lt;li&gt;USA&lt;/li&gt;<br/>&nbsp;&nbsp;...<br/>&lt;/ol&gt;<br/>...</code></td><td>...<ol><li>Bangaldesh<ol type='a'><li>Dhaka</li><li>Rajshahi</li><li>Comilla</li>...</ol></li><li>Singapore</li><li>USA</li>... </ol>...</td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-ol-element'>here</a><br/><br/><h4>Association List(<code>dl</code>)</h4>The <code>dl</code> element represents an association list consisting of zero or more name-value groups. A name-value group consists of one or more names (<code>dt</code> elements) followed by one or more values (<code>dd</code> elements). Within a single <code>dl</code> element, there should not be more than one <code>dt</code> element for each name.<table class='table table-striped'><thead><tr><th>Sample Script</th><th>Output</th></tr></thead><tbody><tr><td><code>...<br/>&lt;dl&gt;<br/>&nbsp;&nbsp;&lt;dt&gt;HTML&lt;/dt&gt;<br/>&nbsp;&nbsp;&lt;dd&gt;hypertext markup language&lt;/dd&gt;<br/><br/>&nbsp;&nbsp;&lt;dt&gt;CSS&lt;/dt&gt;<br/>&nbsp;&nbsp;&lt;dd&gt;cascading style sheet&lt;/dd&gt;<br/>&nbsp;&nbsp;...<br/>&lt;/dl&gt;<br/>...</code></td><td>...<br/><dl><br/><dt>HTML</dt><br/><dd>hypertext markup language</dd><br/><dt>CSS</dt><br/><dd>cascading style sheet</dd><br/>...<br/> </dl><br/>...</td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-dl-element'>here</a>";
}

function styleatr(){
    document.getElementById("mtitle").innerHTML="<code>style</code> Attribute";
    
    document.getElementById("mbody").innerHTML="The <codu>style</code> attribute contains inline <code>CSS</code> scripts<br/><br/>For more visit <a href='https://cssreference.io/'>here</a>";
}

function liatr(){
    document.getElementById("mtitle").innerHTML="LIST <code>li, dt, dd</code> Elements";
    
    document.getElementById("mbody").innerHTML="<h4><code>li</code> Element</h4>The <code>li</code> element represents a list item. If its parent element is an <code>ol, ul, or menu</code> element, then the element is an item of the parent element's list, as defined for those elements. Otherwise, the list item has no defined list-related relationship to any other <code>li</code> element.<br/><br/><table class='table table-striped'><thead><tr><th>Sample Script</th></tr></thead><tbody><tr><td><code>...<br/>&lt;ol&gt;<br/>&nbsp;&nbsp;&lt;li&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;Bangaldesh<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Dhaka&lt;/li&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Rajshahi&lt;/li&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Comilla&lt;/li&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;<br/>&nbsp;&nbsp;&lt;/li&gt;<br/>&nbsp;&nbsp;&lt;li&gt;Singapore&lt;/li&gt;<br/>&nbsp;&nbsp;&lt;li&gt;USA&lt;/li&gt;<br/>&nbsp;&nbsp;...<br/>&lt;/ol&gt;<br/>...</code></td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-li-element'>here</a><br/><br/><h4><code>dt</code> Element</h4>The <code>dt</code> element represents the definition term, or name, part of a term-description group in a description list (<code>dl</code> element).<br/><h4><code>dd</code> Element</h4>The <code>dd</code> element represents the description, definition, or value, part of a term-description group in a description list (<code>dl</code> element).<br/><br/><table class='table table-striped'><thead><tr><th>Sample Script</th></tr></thead><tbody><tr><td><code>...<br/>&lt;dl&gt;<br/>&nbsp;&nbsp;&lt;dt&gt;HTML&lt;/dt&gt;<br/>&nbsp;&nbsp;&lt;dd&gt;hypertext markup language&lt;/dd&gt;<br/><br/>&nbsp;&nbsp;&lt;dt&gt;CSS&lt;/dt&gt;<br/>&nbsp;&nbsp;&lt;dd&gt;cascading style sheet&lt;/dd&gt;<br/>&nbsp;&nbsp;...<br/>&lt;/dl&gt;<br/>...</code></td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-dt-element'>here</a>";
}

function aelm(){
    document.getElementById("mtitle").innerHTML="<code>a</code>(hyperlink) Element";
    
    document.getElementById("mbody").innerHTML="The <code>a</code> element has an <code>href</code> attribute and it represents a hyperlink (a hypertext anchor) labeled by its contents.<br/><br/><table class='table table-striped'><thead><tr><th>Attribute List</th><th>Description</th></tr></thead><tbody><tr><td><code>href</code></td><td>Address of the hyperlink</td></tr><tr><td><code>target</code></td><td>Browsing context for hyperlink navigation. Possible values are: <code>_blank, _self, _top, _parent</code>.</td></tr><tr><td><code>download</code></td><td>Whether to download the resource instead of navigating to it, and its file name if so.</td></tr><tr><td><code>ping</code></td><td>URLs to ping.</td></tr><tr><td><code>rel</code></td><td>Relationship between the location in the document containing the hyperlink and the destination resource.</td></tr><tr><td><code>hreflang</code></td><td>Language of the linked resource.</td></tr><tr><td><code>type</code></td><td>Hint for the type of the referenced resource.</td></tr><tr><td><code>referrerpolicy</code></td><td>Referrer policy for fetches initiated by the element.</td></tr></tbody></table><br/>For more visit <a href='https://html.spec.whatwg.org/#the-a-element'>here</a>";
}

function ahrefatr(){
    document.getElementById("mtitle").innerHTML="<code>href</code> Attribute";
    
    document.getElementById("mbody").innerHTML="This attribute specifies the URL of the linked resource. A URL can be absolute or relative.<br/><br/>For more visit <a href='https://html.spec.whatwg.org/#attr-hyperlink-href'>here</a>";
}

function imgelm(){
    document.getElementById("mtitle").innerHTML="<code>img</code> Element";
    
    document.getElementById("mbody").innerHTML="An <code>img</code> element represents an image given by the <code>src</code> attribute, the value of the <code>alt</code> attribute provides equivalent content for those who cannot process images or who have image loading disabled.<br/><br/><table class='table table-striped'><thead><tr><th>Attribute List</th><th>Description</th></tr></thead><tbody><tr><td><code>alt</code></td><td>Replacement text for use when images are not available.</td></tr><tr><td><code>src</code></td><td>Address of the resource.</td></tr><tr><td><code>height</code></td><td>The intrinsic height of the image, in pixels. Must be an integer without a unit.</td></tr><tr><td><code>width</code></td><td>The intrinsic width of the image in pixels. Must be an integer without a unit.</td></tr><tr><td><code>loading</code></td><td>Indicates how the browser should load the image:<ul><li><code>eager</code> - Loads the image immediately, regardless of whether or not the image is currently within the visible viewport (this is the default value).</li><li><code>lazy</code> - Defers loading the image until it reaches a calculated distance from the viewport, as defined by the browser. The intent is to avoid the network and storage bandwidth needed to handle the image until it's reasonably certain that it will be needed. This generally improves the performance of the content in most typical use cases.</li></ul></td></tr><tr><td>Other attributes</td><td><code>srcset, sizes, crossorigin, usemap, ismap, referrerpolicy, decoding.</code></td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-img-element'>here</a>";
}

function mainelm(){
    document.getElementById("mtitle").innerHTML="<code>main</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>main</code> element represents the dominant contents of the document. A document must not have more than one <code>main</code> element that does not have the <code>hidden</code> attribute specified.<br/><br/><table class='table table-striped'><thead><tr><th>Sample Script</th></tr></thead><tbody><tr><td><img src='resources/images/mainelm.png' style='width:720px;height:650px;'></td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-main-element'>here</a>";
}

function articleelm(){
    document.getElementById("mtitle").innerHTML="<code>article</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>article</code> element represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, <b>independently distributable or reusable</b>.<br/><br/>This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content.<br/><br/>When <code>article</code> elements are nested, the inner <code>article</code> elements represent articles that are in principle related to the contents of the outer <code>article</code>. For instance, a blog entry on a site that accepts user-submitted comments could represent the comments as <code>article</code> elements nested within the <code>article</code> element for the blog entry.<br/><br/><table class='table table-striped'><thead><tr><th>Sample Script</th></tr></thead><tbody><tr><td><img src='resources/images/articleelm.png' style='width:720px;height:560px;'></td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-article-element'>here</a>";
}

function sectionelm(){
    document.getElementById("mtitle").innerHTML="<code>section</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>section</code> element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content, typically with a heading.<br/><br/>Examples of sections would be chapters, the various tabbed pages in a tabbed dialog box, or the numbered sections of a thesis. A Web site's home page could be split into sections for an introduction, news items, and contact information.<br/><br/>Authors are encouraged to use the <code>article</code> element instead of the <code>section</code> element when it would make sense to syndicate the contents of the element.The <code>section</code> element is not a generic container element. When an element is needed only for styling purposes or as a convenience for scripting, authors are encouraged to use the <code>div</code> element instead. A general rule is that the <code>section</code> element is appropriate only if the element's contents would be listed explicitly in the document's outline.<br/><br/><table class='table table-striped'><thead><tr><th>Sample Script</th></tr></thead><tbody><tr><td><img src='resources/images/sectionelm.png' style='width:720px;height:420px;'></td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-section-element'>here</a>";
}

function hrelm(){
    document.getElementById("mtitle").innerHTML="<code>hr</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>hr</code> element represents a paragraph-level thematic break, e.g. a scene change in a story, or a transition to another topic within a section of a reference book.<br/><br/><table class='table table-striped'><thead><tr><th>Sample Script</th></tr></thead><tbody><tr><td><img src='resources/images/hrelm.png' style='width:550px;height:300px;'></td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-hr-element'>here</a>";
}

function pelm(){
    document.getElementById("mtitle").innerHTML="<code>p</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>p</code> element represents a paragraph.<br/><br/><table class='table table-striped'><thead><tr><th>Sample Script</th></tr></thead><tbody><tr><td><code>&lt;p&gt;There was once an example from Femley,&lt;br&gt;<br/>Whose markup was of dubious quality.&lt;br&gt;<br/>The validator complained,&lt;br&gt;<br/>So the author was pained,&lt;br&gt;<br/>To move the error from the markup to the rhyming.</p></code></td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-p-element'>here</a>";
}

function abbrelm(){
    document.getElementById("mtitle").innerHTML="<code>abbr</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>abbr</code> element represents an abbreviation or acronym, optionally with its expansion. The <code>title</code> attribute may be used to provide an expansion of the abbreviation.<br/><br/>For more visit <a href='https://html.spec.whatwg.org/#the-abbr-element'>here</a>";
}

function strongelm(){
    document.getElementById("mtitle").innerHTML="<code>strong</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>strong</code> element represents strong importance, seriousness, or urgency for its contents.<br/><br/><b>Importance:</b> the strong element can be used in a heading, caption, or paragraph to distinguish the part that really matters from other parts that might be more detailed, more jovial, or merely boilerplate.<br/><br/><b>Seriousness:</b> the strong element can be used to mark up a warning or caution notice.<br/><br/><b>Urgency:</b> the strong element can be used to denote contents that the user needs to see sooner than other parts of the document.<br/><br/>For more visit <a href='https://html.spec.whatwg.org/#the-strong-element'>here</a>";
}

function belm(){
    document.getElementById("mtitle").innerHTML="<code>b</code>(bold) Element";
    
    document.getElementById("mbody").innerHTML="The <code>b</code> element represents a span of text to which attention is being drawn for utilitarian purposes without conveying any extra importance and with no implication of an alternate voice or mood, such as key words in a document abstract, product names in a review, actionable words in interactive text-driven software, or an article lede.<br/><br/>For more visit <a href='https://html.spec.whatwg.org/#the-b-element'>here</a>";
}

function subelm(){
    document.getElementById("mtitle").innerHTML="<code>sub</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>sub</code> element represents a subscript.<br/><br/>For more visit <a href='https://html.spec.whatwg.org/#the-sub-and-sup-elements'>here</a>";
}

function supelm(){
    document.getElementById("mtitle").innerHTML="<code>sup</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>sup</code> element represents a superscript.<br/><br/>For more visit <a href='https://html.spec.whatwg.org/#the-sub-and-sup-elements'>here</a>";
}

function markelm(){
    document.getElementById("mtitle").innerHTML="<code>mark</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>mark</code> element represents a run of text in one document marked or highlighted for reference purposes, due to its relevance in another context. When used in the main prose of a document, it indicates a part of the document that has been highlighted due to its likely relevance to the user's current activity.<br/><br/>For more visit <a href='https://html.spec.whatwg.org/#the-mark-element'>here</a>";
}

function emelm(){
    document.getElementById("mtitle").innerHTML="<code>em</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>em</code> element represents stress emphasis of its contents.<br/><br/>For more visit <a href='https://html.spec.whatwg.org/#the-em-element'>here</a>";
}

function delelm(){
    document.getElementById("mtitle").innerHTML="<code>del</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>del</code> element represents a removal from the document.<br/><br/>For more visit <a href='https://html.spec.whatwg.org/#the-del-element'>here</a>";
}

function inselm(){
    document.getElementById("mtitle").innerHTML="<code>ins</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>ins</code> element represents an addition to the document.<br/><br/>For more visit <a href='https://html.spec.whatwg.org/#the-ins-element'>here</a>";
}

function ielm(){
    document.getElementById("mtitle").innerHTML="<code>i</code>(italic) Element";
    
    document.getElementById("mbody").innerHTML="The <code>i</code> element represents a span of text in an alternate voice or mood, or otherwise offset from the normal prose in a manner indicating a different quality of text, such as a taxonomic designation, a technical term, an idiomatic phrase from another language, transliteration, a thought, or a ship name in Western texts.<br/><br/>For more visit <a href='https://html.spec.whatwg.org/#the-i-element'>here</a>";
}

function codeelm(){
    document.getElementById("mtitle").innerHTML="<code>code</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>code</code> element represents a fragment of computer code. This could be an XML element name, a file name, a computer program, or any other string that a computer would recognize.<br/><br/>For more visit <a href='https://html.spec.whatwg.org/#the-code-element'>here</a>";
}

function kbdelm(){
    document.getElementById("mtitle").innerHTML="<code>kbd</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>kbd</code> element represents user input (typically keyboard input, although it may also be used to represent other input, such as voice commands).<br/><br/>For more visit <a href='https://html.spec.whatwg.org/#the-kbd-element'>here</a>";
}

function smallelm(){
    document.getElementById("mtitle").innerHTML="<code>small</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>small</code> element represents side comments such as small print. Small print typically features disclaimers, caveats, legal restrictions, or copyrights. Small print is also sometimes used for attribution, or for satisfying licensing requirements.<br/><br/>For more visit <a href='https://html.spec.whatwg.org/#the-small-element'>here</a>";
}

function timeelm(){
    document.getElementById("mtitle").innerHTML="<code>time</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>time</code> element represents its contents, along with a machine-readable form of those contents in the datetime attribute. The kind of content is limited to various kinds of dates, times, time-zone offsets, and durations.<br/><br/>For more visit <a href='https://html.spec.whatwg.org/#the-time-element'>here</a>";
}

function brelm(){
    document.getElementById("mtitle").innerHTML="<code>br</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>br</code> element represents a line break.<br/><br/>For more visit <a href='https://html.spec.whatwg.org/#the-br-element'>here</a>";
}

function iframeelm(){
    document.getElementById("mtitle").innerHTML="<code>iframe</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>iframe</code> element represents its nested browsing context, embedding another HTML page into the current one. The <code>src</code> attribute gives the URL of a page that the element's nested browsing context is to contain.<br/><br/><table class='table table-striped'><thead><tr><th>Attribute List</th><th>Description</th></tr></thead><tbody><tr><td><code>src</code></td><td>Address of the resource i.e. the URL of the page to embed.</td></tr><tr><td><code>srcdoc</code></td><td>A document to render in the iframe.</td></tr><tr><td><code>name</code></td><td>Name of the nested browsing context.</td></tr><tr><td><code>sandbox</code></td><td>Security rules for nested content.</td></tr><tr><td><code>allow</code></td><td>Feature policy to be applied to the iframe's contents.</td></tr><tr><td><code>allowfullscreen</code></td><td>Whether to allow the iframe's contents to use requestFullscreen().</td></tr><tr><td><code>allowpaymentrequest</code></td><td>Whether the iframe's contents are allowd to use the PaymentRequest Interface to make payment requests.</td></tr><tr><td><code>width</code></td><td>Horizontal dimension.</td></tr><tr><td><code>height</code></td><td>Vertical dimension.</td></tr><tr><td><code>referrerpolicy</code></td><td>Referrer policy for fetches initiated by the element.</td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-iframe-element'>here</a>.<br/><br/>More similar embedding tags are:<ul><li><code>embed</code> - <a href='https://html.spec.whatwg.org/#the-embed-element'>more details</a></li><li><code>object</code> - <a href='https://html.spec.whatwg.org/#the-object-element'>more details</a></li><li><code>video</code> - <a href='https://html.spec.whatwg.org/#the-video-element'>more details</a></li><li><code>audio</code> - <a href='https://html.spec.whatwg.org/#the-audio-element'>more details</a></li></ul>";
}

function divelm(){
    document.getElementById("mtitle").innerHTML="<code>div</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>div</code> element has no special meaning at all. It represents its children. It can be used with the <code>class, lang, and title</code> attributes to mark up semantics common to a group of consecutive elements. It can also be used in a <code>dl</code> element, wrapping groups of <code>dt</code> and <code>dd</code> elements.<br/><br/>For example, a blog post would be marked up using <code>article</code>, a chapter using <code>section</code>, a page's navigation aids using <code>nav</code>, and a group of form controls using <code>fieldset</code>.<br/><br/>On the other hand, <code>div</code> elements can be useful for stylistic purposes or to wrap multiple paragraphs within a section that are all to be annotated in a similar way. In the following example, we see <code>div</code> elements used as a way to set the language of two paragraphs at once, instead of setting the language on the two paragraph elements separately:<br/><br/><table class='table table-striped'><thead><tr><th>Sample Script</th></tr></thead><tbody><tr><td><img src='resources/images/divelm.png' style='width:720px;height:450px;'></td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-div-element'>here</a>";
}

function formelm(){
    document.getElementById("mtitle").innerHTML="<code>form</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>form</code> element represents a document section containing interactive controls for submitting information to a server for processing.<br/><br/><table class='table table-striped'><thead><tr><th>Attribute&nbsp;List</th><th>Description</th></tr></thead><tbody><tr><td><code>action</code></td><td>The URL that processes the form submission. This value can be overridden by a <code>formaction</code> attribute on a <code>&lt;button&gt;, &lt;input type=&quot;submit&quot;&gt;, or &lt;input type=&quot;image&quot;&gt;</code> elements.</td></tr><tr><td><code>method</code></td><td>The HTTP method to submit the form with. Possible values:<ul><li><code>post</code> - The POST method; form data sent as the request body.</li><li><code>get</code> - The GET method; form data appended to the action URL with a ? separator. Use this method when the form has no side-effects.</li><li><code>dialog</code> - When the form is inside a &lt;dialog&gt;, closes the dialog on submission.</li></ul>This value is overridden by <code>formmethod</code> attributes on <code>&lt;button&gt;, &lt;input type=&quot;submit&quot;&gt;, or &lt;input type=&quot;image&quot;&gt;</code> elements.</td></tr><tr><td><code>enctype</code></td><td>If the value of the method attribute is post, enctype is the MIME type of the form submission. Possible values:<ul><li><code>application/x-www-form-urlencoded</code> - The default value.</li><li><code>multipart/form-data</code> - Use this if the form contains &lt;input&gt; elements with type=file.</li><li><code>text/plain</code> - Introduced by HTML5 for debugging purposes.</li></ul>This value can be overridden by <code>formenctype</code> attributes on <code>&lt;button&gt;, &lt;input type=&quot;submit&quot;&gt;, or &lt;input type=&quot;image&quot;&gt;</code> elements.</td></tr><tr><td><code>target</code></td><td>Browsing context for form submission. Possible values: <code>_blank, _self, _top, _parent</code></td></tr><tr><td><code>autocomplete</code></td><td>Default setting for autofill feature for controls in the form.</td></tr><tr><td><code>name</code></td><td>Name of form.</td></tr><tr><td><code>accept-charset</code></td><td>Character encodings to use for form submission.</td></tr><tr><td><code>novalidate</code></td><td>Bypass form control validation for form submission.</td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-form-element'>here</a>";
}

function actionatr(){
    document.getElementById("mtitle").innerHTML="<code>action</code> Attribute";
    
    document.getElementById("mbody").innerHTML="The <code>action</code> attribute represents the URL that processes the form submission. This value can be overridden by a <code>formaction</code> attribute on a <code>&lt;button&gt;, &lt;input type=&quot;submit&quot;&gt;, or &lt;input type=&quot;image&quot;&gt;</code> elements.<br/><br/>For more visit <a href='https://html.spec.whatwg.org/#attr-fs-action'>here</a>";
}

function methodatr(){
    document.getElementById("mtitle").innerHTML="<code>method</code> Attribute";
    
    document.getElementById("mbody").innerHTML="The <code>method</code> attribute represents the HTTP method to submit the form with. Possible values:<ul><li><code>post</code> - The POST method; form data sent as the request body.</li><li><code>get</code> - The GET method; form data appended to the action URL with a ? separator. Use this method when the form has no side-effects.</li><li><code>dialog</code> - When the form is inside a &lt;dialog&gt;, closes the dialog on submission.</li></ul>This value is overridden by <code>formmethod</code> attributes on <code>&lt;button&gt;, &lt;input type=&quot;submit&quot;&gt;, or &lt;input type=&quot;image&quot;&gt;</code> elements.<br/><br/>For more visit <a href='https://html.spec.whatwg.org/#attr-fs-method'>here</a>";
}

function enctypeatr(){
    document.getElementById("mtitle").innerHTML="<code>enctype</code> Attribute";
    
    document.getElementById("mbody").innerHTML="If the value of the method attribute is post, enctype is the MIME type of the form submission. Possible values:<ul><li><code>application/x-www-form-urlencoded</code> - The default value.</li><li><code>multipart/form-data</code> - Use this if the form contains &lt;input&gt; elements with type=file.</li><li><code>text/plain</code> - Introduced by HTML5 for debugging purposes.</li></ul>This value can be overridden by <code>formenctype</code> attributes on <code>&lt;button&gt;, &lt;input type=&quot;submit&quot;&gt;, or &lt;input type=&quot;image&quot;&gt;</code> elements.<br/><br/>For more visit <a href='https://html.spec.whatwg.org/#attr-fs-enctype'>here</a>";
}

function tableelm(){
    document.getElementById("mtitle").innerHTML="HTML <code>table</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>table</code> element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.<br/><br/><table class='table table-striped'><thead><tr><th>Sample Script</th></tr></thead><tbody><tr><td><img src='resources/images/tableelm.png' style='width:720px;height:500px;'></td></tr></tbody></table><br/><br/>List of <code>table</code> element tags:<br/><br/><table class='table table-striped'><thead><tr><th>Table&nbsp;Tag</th><th>Description</th></tr></thead><tbody><tr><td><code>table</code></td><td>The <code>table</code> element represents data with more than one dimension, in the form of a table.</td></tr><tr><td><code>thead</code></td><td>The <code>thead</code> element represents the block of rows that consist of the column labels (headers) for the parent table element, if the <code>thead</code> element has a parent and it is a table.</td></tr><tr><td><code>tbody</code></td><td>The <code>tbody</code> element represents a block of rows that consist of a body of data for the parent table element, if the <code>tbody</code> element has a parent and it is a table.</td></tr><tr><td><code>tfoot</code></td><td>The <code>tfoot</code> element represents the block of rows that consist of the column summaries (footers) for the parent table element, if the <code>tfoot</code> element has a parent and it is a table.</td></tr><tr><td><code>tr</code></td><td>The <code>tr</code> element represents a row of cells in a table.</td></tr><tr><td><code>th</code></td><td>The <code>th</code> element represents a header cell in a table.</td></tr><tr><td><code>td</code></td><td>The <code>td</code> element represents a data cell in a table.<br/>Attributes List:<ul><li><code>colspan</code> — Number of columns that the cell is to span</li><li><code>rowspan</code> — Number of rows that the cell is to span</li><li><code>headers</code> — The header cells for this cell</li></ul></td></tr><tr><td><code>caption</code></td><td>The caption element represents the title of the table that is its parent, if it has a parent and that is a table element.</td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-table-element'>here</a>";
}

function labelelm(){
    document.getElementById("mtitle").innerHTML="<code>label</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>label</code> element represents a caption in a user interface. The caption can be associated with a specific form control, known as the label element's labeled control, either using the <code>for</code> attribute, or by putting the form control inside the label element itself.<br/><br/>The <code>for</code> attribute may be specified to indicate a form control with which the caption is to be associated. If the attribute is specified, the attribute's value must be the ID of a labelable element in the same tree as the label element.<br/><br/><table class='table table-striped'><thead><tr><th>Sample Script</th></tr></thead><tbody><tr><td><code>&lt;label&gt;Full name: &lt;input name=fn&gt; &lt;small&gt;Format: First Last&lt;/small&gt;&lt;/label&gt;</code></td></tr><tr><td><code>&lt;label for=&quot;uname&quot;&gt;User name:&lt;/label&gt; &lt;input type=&quot;text&quot; id=&quot;uname&quot;&gt;</code></td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-label-element'>here</a>";
}

function inputelm(){
    document.getElementById("mtitle").innerHTML="<code>input</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>input</code> element represents a typed data field, usually with a form control to allow the user to edit the data. The <code>type</code> attribute controls the data type (and associated control) of the element.<br/><br/><table class='table table-striped'><thead><tr><th>Different&nbsp;Input&nbsp;Types</th><th>Description</th><th>Webpage View</th></tr></thead><tbody><tr><td><code>hidden</code></td><td>A hidden field containing arbitrary string.</td><td>Not visible in the webpage.</td></tr><tr><td><code>text</code></td><td>A text field containing text with no line breaks.</td><td><input type='text' placeholder='text field'></td></tr><tr><td><code>search</code></td><td>A search field containing text with no line breaks.</td><td><input type='search' placeholder='search here'></td></tr><tr><td><code>tel</code></td><td>A telephone field containing text with no line breaks.</td><td><input type='tel' placeholder='telephone number'></td></tr><tr><td><code>url</code></td><td>An URL field containing absolute URL.</td><td><input type='url' placeholder='https://www.example.com'></td></tr><tr><td><code>email</code></td><td>An email field containing e-mail address or list of e-mail addresses.</td><td><input type='email' placeholder='example@gmail.com'></td></tr><tr><td><code>password</code></td><td>A password field containing text(hidden with character * or, dot) with no line breaks.</td><td><input type='password' value='abcd'></td></tr><tr><td><code>date</code></td><td>A date field containing a date(year, month, day) with no time zone.</td><td><input type='date' value='2020-04-26'></td></tr><tr><td><code>month</code></td><td>A month field containing a date consisting of a year and a month with no time zone.</td><td><input type='month' value='2020-03'></td></tr><tr><td><code>week</code></td><td>A week field containing a date consisting of a week-year number and a week number with no time zone.</td><td><input type='week' value='2020-W20'></td></tr><tr><td><code>time</code></td><td>A time field containing a time (hour, minute, second, fractional seconds) with no time zone.</td><td><input type='time' value='15:38'></td></tr><tr><td><code>datetime-local</code></td><td>A local date and time field containing a date and time (year, month, day, hour, minute, second, fraction of a second) with no time zone.</td><td><input type='datetime-local' value='2020-04-26T15:41:05'></td></tr><tr><td><code>number</code></td><td>A number field containing numerical value.</td><td><input type='number' min=0 max=100 step=5 value=50></td></tr><tr><td><code>range</code></td><td>A range field containing a numerical value with the extra semantic that the exact value is not important.</td><td><input type='range' min=0 max=100 step=5 value=80 list='values'><datalist id='values'><option value=0 label='low'><option value=100 label='high'><option value=50 label='mid'></datalist></td></tr><tr><td><code>color</code></td><td>A color field containing an sRGB color with 8-bit red, green, and blue components</td><td><input type='color' value='#FF0000'></td></tr><tr><td><code>checkbox</code></td><td>A checkbox field containing a set of zero or more values from a predefined list.</td><td><input type='checkbox' value='yes' checked>Agree</td></tr><tr><td><code>radio</code></td><td>A radio button.</td><td><input type='radio' name='gender' value='m' checked>male <input type='radio' name='gender' value='f'>female</td></tr><tr><td><code>file</code></td><td>A file upload field containing zero or more files each with a MIME type and optionally a file name.</td><td><input type='file'></td></tr><tr><td><code>submit</code></td><td>A submit button containing an enumerated value, with the extra semantic that it must be the last value selected and initiates from submission.</td><td><input type='submit' value='Submit Me'></td></tr><tr><td><code>image</code></td><td>An image button containing a coordinate, relative to a particular images's size, with the extra semantic that it must be the last value selected and initiates form submission.</td><td><input type='image' src='resources/images/submitbtn.png' height=30 width=100 alt='can&apos;t load image'></td></tr><tr><td><code>reset</code></td><td>A reset button.</td><td><input type='reset' value='Reset All'></td></tr><tr><td><code>button</code></td><td>A general button.</td><td><input type='button' value='Sample Button'></td></tr></tbody></table><br/>For more visit <a href='https://html.spec.whatwg.org/#the-input-element'>here</a>";
}

function inputatr(){
    document.getElementById("mtitle").innerHTML="<code>input</code> Element Attributes";
    
    document.getElementById("mbody").innerHTML="<table class='table table-striped'><thead><tr><th>Attribute&nbsp;Name</th><th>Description & Sample Script</th><th>Output</th></tr></thead><tbody><tr><td><code>accept<br/>multiple</code></td><td><ul><li>Hint for expected file type in file upload control.</li><li>Whether to allow multiple values.</li></ul><br/><code>&lt;input type='file' accept='.txt, .docx, application/pdf, image/*, audio/*, video/*' multiple&gt;</code></td><td><input type='file' accept='.txt, .docx, application/pdf, image/*, video/*, audio/*' multiple></td></tr><tr><td><code>alt<br/>src<br/>height<br/>width</code></td><td><ul><li>Replacement text for use when images are not available.</li><li>Address of the resource.</li><li>Vertical dimension.</li><li>Horizontal dimension.</li></ul><br/><code>&lt;input type='image' alt='submit button image' src='resources/images/submitbtn.png' width=80 height=30&gt;</code></td><td><input type='image' alt='submit button image' src='resources/images/submitbtn.png' width=80 height=30></td></tr><tr><td><code>autocomplete</code></td><td colspan=3>Hint for form autofill feature.<br/>For more visit <a href='https://html.spec.whatwg.org/#attr-fe-autocomplete'>here</a></td></tr><tr><td><code>checked</code></td><td>Whether the control is checked.<br/><code>&lt;input type='radio' value='m' checked&gt;male<br/>&lt;input type='checkbox' value='yes' checked&gt;Agree</code></td><td><input type='radio' value='m' checked>male<br/><input type='checkbox' value='yes' checked>Agree</td></tr><tr><td><code>dirname</code></td><td colspan=3>Name of form control to use for sending the element's directionality in form submission.<br/>For more visit <a href='https://html.spec.whatwg.org/#attr-fe-dirname'>here</a></td></tr><tr><td><code>disabled<br/>readonly</code></td><td><ul><li>Whether the form control is disabled.</li><li>Whether to allow the value to be edited by the user.</li></ul><br/><code>&lt;input type='text' value='ABCD' disabled&gt;<br/>&lt;input type='text' value='you can&apos;t edit me' readonly&gt;</code></td><td><input type='text' value='ABCD' disabled><br/><br/><input type='text' value='you can&apos;t edit me' readonly></td></tr><tr><td><ul><code>form<br/>formaction<br/>formenctype<br/>formmethod<br/>formnovalidate<br/>formtarget</code></td><td  colspan=3><ul><li>Associates the element with a form element.</li><li>URL to use for form submission.</li><li>Entry list encoding type to use for form submission.</li><li>Variant to use for form submission.</li><li>Bypass form control validation for form submission.</li><li>Browsing context for form submission.</li></ul><br/><code>&lt;form action='example1.php' method='get' id='form1'&gt;<br/>&nbsp;&nbsp;&lt;input type='text' value='value1' name='nm'&gt;<br/>&nbsp;&nbsp;&lt;input type='submit' value='Submit Data'&gt;<br/>&nbsp;&nbsp;&lt;input type='submit' formaction='example2.php' formmethod='post' formenctype='multipart/form-data' formtarget='_blank' value='Another Submit'&gt;<br/>&lt;/form&gt;<br/><br/>&lt;input type='text' value='test value' form='form1'&gt;</code></td></tr><td></td></tr><tr><td><code>list</code></td><td>List of autocomplete options.<br/><code>&lt;input type='url' list='urllist'&gt;<br/>&lt;datalist id='urllist'&gt;<br/>&lt;option value='https://www.google.com'&gt;Google&lt;/option&gt;<br/>...<br/>&lt;/datalist&gt;</code></td><td><input type='url' list='urllist'><datalist id='urllist'><option value='https://www.google.com'>Google</option><option value='https://www.facebook.com'>Facebook</option></datalist></td></tr><tr><td><code>max<br/>min<br/>step</code></td><td><ul><li>Maximum value.</li><li>Minimum value.</li><li>Granularity to be matched by the form control's value.</li></ul><br/><code>&lt;input type='number' max=10 min=1 step=1 value=5&gt;</code></td><td><input type='number' max=10 min=1 step=1 value=5></td></tr><tr><td><code>maxlength<br/>minlength</code></td><td><ul><li>Maximum length of value.</li><li>Minimum length of value.</li></ul><br/><code>&lt;input type='password' maxlength=15 minlength=5 title='no of characters must be within the range 5 to 15' required&gt;</code></td><td><form action='example.php' method='post'><input type='password' maxlength=15 minlength=5 title='no of characters must be within the range 5 to 15' required> <input type='submit' value='Submit'></form></td></tr><tr><td><code>name</code></td><td>Name of the element to use for form submission.<br/><code>&lt;input type='text' name='nm'&gt;</code></td><td>You can find this field from the server side by using this name.<br/><input type='text' name='nm'></td></tr><tr><td><code>pattern</code></td><td>Pattern to be matched by the form control's value.<br/><code>&lt;input type='text' placeholder='A digit followed by 3 letters from a-z' pattern='^[0-9][a-z]{3}$'&gt;</code></td><td>Here you can't submit the data until the pattern is matched.<br/><form action='example.php' method='post'><input type='text' placeholder='A digit + 3 characters from a-z' pattern='^[0-9][a-z]{3}$'> <input type='submit' value='Submit'></form></td></tr><tr><td><code>placeholder</code></td><td>User-visible label to be placed within the form control.<br/><code>&lt;input type='text' placeholder='your name here'&gt;</code></td><td><input type='text' placeholder='your name here'></td></tr><tr><td><code>required</code></td><td>Whether the control is required for form submission.<br/><code>&lt;input type='email' required&gt;</code></td><td>Submit the empty field and see you can't submit the empty field<br/><form action='example.php' method='post'><input type='email' required><input type='submit' value='Submit'></form></td></tr><tr><td><code>size</code></td><td>The <code>size</code> attribute gives the number of characters that, in a visual rendering, the user agent is to allow the user to see while editing the element's value.<br/><code>&lt;input type='text' size=12 value='0123456789012'&gt;</code></td><td><input type='text' size=10 value='01234567890123456'></td></tr><tr><td><code>value</code></td><td>Value of the form control.<br/><code>&lt;input type='text' value='initial value'&gt;</code></td><td><input type='text' value='initial value'></td></tr><tr><td><code>title</code></td><td>Show hints/tooltips when you hover your mouse on the form control element.<br/><code>&lt;input type='password' title='must contain at least 8 characters'&gt;</code></td><td>Put your mouse on the text box and see the tooltip<br/><input type='password' title='must contain at least 8 characters'></td></tr></tbody></table>";
}

function selectelm(){
    document.getElementById("mtitle").innerHTML="<code>select</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>select</code> element represents a control for selecting amongst a set of options.<br/><br/>The <code>multiple</code> attribute is a boolean attribute. If the attribute is present, then the <code>select</code> element represents a control for selecting zero or more options from the list of options. If the attribute is absent, then the select element represents a control for selecting a single option from the list of options.<br/><br/>The <code>size</code> attribute gives the number of options to show to the user. The <code>size</code> attribute, if specified, must have a value that is a valid non-negative integer greater than zero.<br/><br/><table class='table table-striped'><thead><tr><th>Sample Script</th><th>Output</th></tr></thead><tbody><tr><td><code>&lt;p&gt;<br/>&nbsp;&nbsp;&lt;label for='unittype'&gt;Select unit type:&lt;/label&gt;<br/>&nbsp;&nbsp;&lt;select id='unittype' name='unittype'&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;option value='1'&gt; Miner &lt;/option&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;option value='2'&gt; Puffer &lt;/option&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;option value='3' selected&gt; Snipey &lt;/option&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;option value='4'&gt; Max &lt;/option&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;option value='5'&gt; Firebot &lt;/option&gt;<br/>&nbsp;&nbsp;&lt;/select&gt;<br/>&lt;/p&gt;</code></td><td><p><br/><label for=&quot;unittype&quot;>Select unit type:</label><br/><select id='unittype' name='unittype'><br/><option value='1'> Miner </option><br/><option value='2'> Puffer </option><br/><option value='3' selected> Snipey </option><br/><option value='4'> Max </option><br/><option value='5'> Firebot </option><br/></select><br/></p></td></tr><tr><td><code>&lt;p&gt;<br/>&nbsp;&nbsp;&lt;label for=&quot;allowedunits&quot;&gt;Select unit types to enable on this map:&lt;/label&gt;<br/>&nbsp;&nbsp;&lt;select id=&quot;allowedunits&quot; name=&quot;allowedunits&quot; size=5 multiple&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;option value='1'&gt; Miner &lt;/option&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;option value='2' selected&gt; Puffer &lt;/option&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;option value='3'&gt; Snipey &lt;/option&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;option value='4' selected&gt; Max &lt;/option&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;option value='5'&gt; Firebot &lt;/option&gt;<br/>&nbsp;&nbsp;&lt;/select&gt;<br/>&lt;/p&gt;</code></td><td><p><br/><label for='allowedunits'>Select unit types to enable on this map:</label>   <select id='allowedunits' name='allowedunits' size=5 multiple><option value='1'> Miner </option><option value='2' selected> Puffer </option><option value='3'> Snipey </option><option value='4' selected> Max </option><option value='5'> Firebot </option></select></p></td></tr><tr><td></td><td></td></tr></tbody></table><br/><br/>List of attribtues:<br/><br/><table class='table table-striped'><thead><tr><th>Attribute&nbsp;List</th><th>Description</th></tr></thead><tbody><tr><td><code>size</code></td><td>If the control is presented as a scrolling list box (e.g. when <code>multiple</code> is specified), this attribute represents the number of rows in the list that should be visible at one time. Browsers are not required to present a <code>select</code> element as a scrolled list box. The default value is 0.</td></tr><tr><td><code>multiple</code></td><td>This Boolean attribute indicates that multiple options can be selected in the list. If it is not specified, then only one option can be selected at a time. When multiple is specified, most browsers will show a scrolling list box instead of a single line dropdown.</td></tr><tr><td><code>required</code></td><td>Whether the control is required for form submission.</td></tr><tr><td><code>name</code></td><td>Name of the element to use for form submission.</td></tr><tr><td><code>form</code></td><td>Associates the element with a form element.</td></tr><tr><td><code>disabled</code></td><td>Whether the form control is disabled.</td></tr><tr><td><code>autocomplete</code></td><td>Hint for form autofill feature.</td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-select-element'>here</a>";
}

function optionelm(){
    document.getElementById("mtitle").innerHTML="<code>option</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>option</code> element represents an option in a <code>select</code> element or as part of a list of suggestions in a <code>datalist</code> element.<br/><br/><table class='table table-striped'><thead><tr><th>Attribute List</th><th>Description</th></tr></thead><tbody><tr><td><code>disabled</code></td><td>Whether the form control is disabled.</td></tr><tr><td><code>label</code></td><td>User-visible label.</td></tr><tr><td><code>selected</code></td><td>Whether the option is selected by default.</td></tr><tr><td><code>value</code></td><td>Value to be used for form submission.</td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-option-element'>here</a>";
}

function tareaelm(){
    document.getElementById("mtitle").innerHTML="<code>textarea</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>textarea</code> element represents a multiline plain text edit control for the element's raw value. The contents of the control represent the control's default value.<br/><br/><table class='table table-striped'><thead><tr><th>Attribute List</th><th>Description</th></tr></thead><tbody><tr><td><code>cols</code></td><td>Maximum number of characters per line.</td></tr><tr><td><code>rows</code></td><td>Number of lines to show.</td></tr><tr><td><code>disabled</code></td><td>Whether the form control is disabled.</td></tr><tr><td><code>maxlength</code></td><td>Maximum length of value.</td></tr><tr><td><code>minlength</code></td><td>Minimum length of value.</td></tr><tr><td><code>placeholder</code></td><td>User-visible label to be placed within the form control.</td></tr><tr><td><code>readonly</code></td><td>Whether to allow the value to be edited by the user.</td></tr><tr><td><code>wrap</code></td><td>How the value of the form control is to be wrapped for form submission.</td></tr><tr><td>Other attributes</td><td><code>autocomplete, dirname, form, required</code></td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-textarea-element'>here</a>";
}

function buttonelm(){
    document.getElementById("mtitle").innerHTML="<code>button</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>button</code> element represents a button labeled by its contents.<br/><br/><table class='table table-striped'><thead><tr><th>Attribute List</th><th>Description</th></tr></thead><tbody><tr><td><code>type</code></td><td>Type of button. Possible values:<ul><li><code>submit</code></li><li><code>reset</code></li><li><code>button</code></li></ul></td></tr><tr><td><code>value</code></td><td>Value to be used for form submission.</td></tr><tr><td><code>disabled</code></td><td>Whether the form control is disabled.</td></tr><tr><td>Other attributes</td><td><code>form, formaction, formmethod, formenctype, formtarget, formnovalidate, name</code></td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-button-element'>here</a>";
}

function footerelm(){
    document.getElementById("mtitle").innerHTML="<code>footer</code> Element";
    
    document.getElementById("mbody").innerHTML="The <code>footer</code> element represents a footer for its nearest ancestor sectioning content or sectioning root element. When the nearest ancestor sectioning content or sectioning root element is the body element, then it applies to the whole page.<br/><br/>Footers don't necessarily have to appear at the end of a section, though they usually do. A footer typically contains information about its section such as who wrote it, links to related documents, copyright data, and the like.<br/><br/><table class='table table-striped'><thead><tr><th>Sample Script</th></tr></thead><tbody><tr><td><img src='resources/images/footerelm.png' style='width:720px;height:450px;'></td></tr></tbody></table>For more visit <a href='https://html.spec.whatwg.org/#the-footer-element'>here</a>";
}

function demo(){
    document.getElementById("mtitle").innerHTML="DEMO tag";
    
    document.getElementById("mbody").innerHTML="demo description here <br/><br/><table class='table table-striped'><thead><tr><th>Sample Script</th><th>Output</th></tr></thead><tbody><tr><td></td><td></td></tr></tbody></table>";
}
