# issue
### Navigation issue while using BrowserRouter
   **Description** 
    While running the application in tizen simulator the pages where rendering but not navigationg because of the use of BrowserRouter. BrowserRouter uses the HTML5 history API to create clean, human-readable URLs (e.g., https://example.com/about). This provides a natural user experience, but it requires server-side configuration.
    
    
**Solution**
     HashRouter solves this issue by using the URL hash portion (e.g., https://example.com/#/about). he key is that anything after the # symbol in a URL is handled entirely by the browser on the client side and is never sent to the server in the HTTP request.

### Back navigation issue in tizen
**Description** 
   LG webOS handles the back button press using the standard DOM's history object by default, Tizen requires explicit event handling for the hardware back button (tizenhwkey event) and does not rely solely on the browser history API in the same way as webOS.


**Solution**
   To make the back button work on Tizen, added an event listener for the hardware key and implemented navigation logic within that listener

### Base64 Encoding Fails for Username / Password
**Description** 
While implementing Basic Authentication, encoding the `username::password` string using `btoa()` caused failures when credentials contained non-ASCII characters. It throws an `InvalidCharacterError`.

**Solution**
Use `TextEncoder` to properly encode the string as UTF-8 before converting it to Base64.


### App Not Working on Samsung TVs
**Description**
The application was not running on samsung TV while it run on simulator properly.

**Solution** 
- **Build Output:** Overrode Vite defaults in `vite.config.ts` to pack things safely.
- **Privileges:** Exposed Tizen native privileges in `config.xml` to allow `<tizen:privilege name="http://tizen.org/privilege/internet"/>` access.
- **CORS:** Forced `Access-Control-Allow-Origin: *` to strictly prevent blocking the TV's origin requests against the backend.
