window.jquerytest = {
    init:function(){
      var d1 = $()
      $('.game').click(clicker);
      function clicker(e){
console.log(e)
if ($(this).find('.disk1')) {
  console.log('hi')
}
        }
      }
    }

window.jquerytest.init();
