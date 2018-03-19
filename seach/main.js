<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script>
    $('#search_input').bind('keyup',function(){
        var jqueryInput = $(this);
        var searchText = jqueryInput.val();
        $.get('http://api.bing.com/qsonhs.aspx?q='+searchText);
    });
$('#search-suggest').css({
    top:$('#search-form').offset().top+$('#search-form').height()+10,
    left:$('#search-form').offset().left
}).show();

</script>