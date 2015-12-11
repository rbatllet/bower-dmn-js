var DmnJS = window.DmnJS;

var dmnjs = new DmnJS({ container: '#canvas' });

function success() {
  $('body').addClass('success');
}

function fail(err) {
  $('body').addClass('fail');

  console.error('something went wrong!');
  console.error(err);
}

$.get('../resources/example.dmn', function(exampleTable) {

  dmnjs.importXML(exampleTable, function(err) {

    if (err) {
      return fail(err);
    }

    try {
      return success();
    } catch (e) {
      return fail(e);
    }
  });

}, 'text');
