$( document ).ready(function() {
  S = (function(){
    var my = this;
    var id =0;
    var $elements = $('.confirm');
    
    function replaceAllConfirmElements(){
      var i = $elements.length;
  	  while(i--){
      	replaceConfirmElement($($elements[i]));
      }
    };
    //PrimeFaces.confirm({source:"j_idt87:j_idt88",header:"Confirmation",message:"Are you sure?",icon:"ui-icon-alert"});return false;
    function replaceConfirmElement($element){
      var $parent = getClosestLinkOrButton($element);
      enrichParent($parent, $element.data('header'), $element.data('message'), $element.data('icon'));
      
      $element.remove();
    };
    
    function getClosestLinkOrButton($element){
      var closestLink = $element.closest('a');
      console.log(closestLink);
      if(closestLink.length !== 0){
        return $(closestLink[0]);
      } else{
        var closestButton = $element.closest('button');
        console.log(closestButton);
        if(closestButton.length !== 0){
          return $(closestButton[0]);
        }
      }
      return null;
    };
    
    function enrichParent($parent, header, message, icon){
      if($parent === null)
        return;
        
      var confirmParams = {
        src :  's_confirm_idt_' + (++id),
        action : $parent.attr('onclick'),
        header: header,
        message: message,
        icon: icon
      }

      $parent.attr('onclick', 'S.confirm('+JSON.stringify(confirmParams)+'); return false;');
      $parent.addClass(confirmParams.src);
    };
    
    function createModal(header, message, icon, action){
      return '\
      <div class="modal fade" tabindex="-1" role="dialog" style="display: none;">\
          <div class="modal-dialog">\
            <div class="modal-content">\
              <div class="modal-header">\
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
                <h4 class="modal-title">'+header+'</h4>\
              </div>\
              <div class="modal-body">\
                <p>\
                  <span class="ui-icon '+icon+'" style="float: left;"></span> &nbsp;'+message+'\
                </p>\
              </div>\
              <div class="modal-footer">\
                <button type="button" class="btn btn-default dismiss-btn" data-dismiss="modal">Close</button>\
                <button type="button" class="btn btn-primary success-btn" onclick="'+action+'">Save changes</button>\
              </div>\
            </div>\
          </div>\
        </div>'
    };
    
    my.confirm = function(params){
      var $parent = $('.'+params.src);
      if($parent.length !== 0){
        var $modal = $(createModal(params.header, params.message, params.icon, params.action));
        $($parent[0]).after($modal);	
        $modal.modal('show');
      }
    };
    
    replaceAllConfirmElements();
    
    return my;

  }());

});