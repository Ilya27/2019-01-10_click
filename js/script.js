/*ET 120 minutes */
/*AT 240 minutes :(*/
$(() => {
  'use strict'
  var $container=$('<div>').appendTo('body');
  $container.addClass('container');
  $container.css('display','flex');
  $container.css('align-items','center');
  $container.css('flex-direction','column');
  $container.css('justify-content','center');
  var $container_table=$('<div>').appendTo($container);
  $container_table.addClass('container_table');
  var $table=$('<table>').appendTo($container_table);
  $($table).attr('id','myTable' );
  $table.css('margin-top','15px')
    for (var i = 0; i < 10; i++) {
      var $tr = $('<tr>').appendTo($table);
      for (var j = 0; j < 10; j++) {
        var $td = $('<td>').appendTo($tr);
        $td.css('border','1px solid black');
        $td.css('width','40px');
        $td.css('height','40px');
      }
    }

    var $container_button=$('<div>').appendTo($container_table);
    $container_button.addClass('container_button');
    $container_button.css('width','100%');
    $container_button.css('display','flex');
    $container_button.css('align-items','center');
    $container_button.css('justify-content','space-between');
    $container_button.css('margin-top','15px');
    var $clear=$('<button>').appendTo($container_button);
    $clear.addClass('btn btn-default');
    $clear.text('Clear with restore ');
    var $clearAll=$('<button>').appendTo($container_button);
    $clearAll.addClass('btn btn-default');
    $clearAll.text('clearAll ');
    var $icon_clear=$('<span>').appendTo($clear);
    $icon_clear.addClass('glyphicon glyphicon-trash');
    $icon_clear.attr('aria-hidden','true');
    var $restore=$('<button>').appendTo($container_button);
    $restore.addClass('btn btn-default');
    $restore.text('Restore ');
    var $icon_restore=$('<span>').appendTo($restore);
    $icon_restore.addClass('glyphicon glyphicon-repeat');
    $icon_restore.attr('aria-hidden','true')

    var arr=[];
    $('td').on('click',function (){
      var color  = ['black'];
      if (this.style.background != color[0]){
        $(this).css('background', 'black');
        arr.push([this.parentNode.rowIndex,this.cellIndex]);
      }
      else{
        $(this).css('background', 'white');
        if (isItemInArray(arr, [this.parentNode.rowIndex,this.cellIndex])+1) {
          arr.splice(isItemInArray(arr, [this.parentNode.rowIndex,this.cellIndex]),1);
        }
      }
    });

    var copy_arr=[];
    $($clear).on('click',function (){
        $('td').css('background', 'none');
        copy_arr=arr;
      });

      $($clearAll).on('click',function (){
          $('td').css('background', 'none');
          arr=[];
          copy_arr=[];
        });

    $($restore).on('click',function (){
        restore(copy_arr)
      });

    function isItemInArray(array, item) {
      for (var i = 0; i < array.length; i++) {
        if (array[i][0] == item[0] && array[i][1] == item[1]) {
          return i;
        }
      }
      return false;
    }
  function restore(arr) {
    var  cells=[],rows=[];
    for(var i = 0; i < arr.length; i++) {
      for(var j = 0; j < arr[i].length; j++) {
        rows[i]=arr[i][0];// Понимаю , что можно было это в начале закинуть в два разных массива, но дошло поздно до меня. 
        cells[i]=arr[i][1];
      }
    }
    for (var k = 0; k < rows.length; k++) {
      var x = document.getElementById("myTable").rows[rows[k]].cells[cells[k]];
      $(x).css('background', 'black');
    }
  }
});
