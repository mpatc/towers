window.jquerytest = {
    init:function(){
      $('.game').click(clicker);
      function clicker(e){
        console.log(e)
    if ($(e.target).hasClass('drag')) {
      $(e.target).toggleClass('selected')
    } else if (!$(e.target).hasClass('drag')) {
      var x = $(e.target).find('.container')
}
        }
      }
    }


window.jquerytest.init();

