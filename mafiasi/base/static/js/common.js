// Send CSRF token for all AJAX requests which needs them
(function() {
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    var csrftoken = getCookie('csrftoken');
    function csrfSafeMethod(method) {
        // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
    $.ajaxSetup({
        crossDomain: false, // obviates need for sameOrigin test
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type)) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });
})();

$(function() {
    $('span.at-sign').replaceWith('@');
});

// borrowed from the jQuery examples of $.map
$.fn.equalizeHeights = function() {
    var maxHeight = this.map(function(i, e) {
        return $(e).height();
    }).get();
    return this.height(Math.max.apply(this, maxHeight));
};

$("select.make-button-group").each(function() {
    var select = $(this);
    select.hide();

    var group = $('<div class="btn-group input-group"></div>');
    select.after(group);

    select.find("option").each(function() {
        var option = $(this);
        var button = $('<button type="button" class="btn btn-sm btn-default"></button>');
        button.text(option.text());
        button.val(option.val());
        button.click(function() {
            group.find(".btn").removeClass("active");
            button.addClass("active");
            select.val(button.val());
            return false;
        });
        group.append(button);
    });

    group.find(".btn[value='" + select.val() + "']").addClass("active");
});

