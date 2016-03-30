/*
* Main JS File
*/
$(document).ready(function(){
    var $clearButton = $('#clearButton');
    var $submitButton = $('button[type=submit]');
    $clearButton.prop('disabled', true);
    $submitButton.prop('disabled', true);

    $('#task').keyup(function(e){
      $clearButton.prop('disabled', true);
      $submitButton.prop('disabled', true);

      if($(this).val() != ''){
        $clearButton.prop('disabled', false);
        $submitButton.prop('disabled', false);
      }
    });

    $('#clearButton').click(function(){
      $('#task').val('');
    });

    $('#add-task').submit(function(e){
        e.preventDefault();

        var $todoList = $('#todo');
        var task = $('#task').val();
        var $newItem = createTask(task);

        $todoList.append($newItem);
    });


    $(document).on('click', '.tasks', function(){
        alert('whoo');
    });

    function createTask(task){
      var $task = $('<li class="list-group-item tasks">');
      $task.append('<input type="checkbox"> ' + task);
      
      return $task;
    }


    // $('.btn').click(function(e){
    //   e.preventDefault();
    //   alert('Weh');
    // });
});
