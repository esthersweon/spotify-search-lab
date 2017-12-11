$(document).ready( function() {
  console.log('JS is loaded!');
  // indentation is off in this file – please reformat
var url_link="https://api.tvmaze.com/shows";
$("#search_btn").on('click',function(e){
  e.preventDefault();
    $.ajax({
      method: 'GET',
      url: url_link,
      dataType: 'json',
      data:$("form").serialize(), // this adds the q=yourSearchTerm to your url_link
      success: onSuccess,
      error:onError
    })
});
function onSuccess(data){
  console.log(data);
  // need to add data to page, not just console.log it
}
function onError(data){
  alert(`error :${JSON.stringify(data)}`);
}
});
