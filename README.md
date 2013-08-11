Majesty JS (work in progress)
==========
A little framework for handling common form interactions

[![Build Status](https://travis-ci.org/craigerm/majesty-js.png?branch=master)](https://travis-ci.org/craigerm/majesty-js)


Examples
========


For dependent dropdowns/radio buttons make your markup look like this:

```html

  <div id="container">

    <select name="status"></select>
      <option value="approved">Approved</option>
      <option value="rejected">Rejected</option>
      <option value="delayed">Delayed</option>
    </select>

    <div data-depends-on="status" data-depends-value="approved">
      This content will be show when the value is approved
    </div>

    <div data-depends-on="status" data-depends-value="rejected,delayed">
      This will be shown if the dropdown value is changed 
      to rejected or delayed
    </div>

    <input type="radio" name="userType" value="standard" />Standard User
    <input type="radio" name="userType" value="admin" />Administrator

    <div data-depends-on="userType" data-depends-value="admin">
      Advanced configuration for admin users should go here.
    </div>

  </div>
```

Call the plugin on some container:

```javascript
  $('#container').majesty()
```

TODO
=========
- Add support for checkboxes

License
=========
MIT License (c) Craig MacGregor 2013
