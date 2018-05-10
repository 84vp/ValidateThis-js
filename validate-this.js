console.log('validation js is init')

var RegexOlSymb = /^[0-9-а-яА-Яa-zA-Z-іІїЇєЄґҐ' -]+$/; //--- OL SYMBOLS INPUT
var CharRegexOlSymb = /[0-9-а-яА-Яa-zA-Z-іІїЇєЄґҐ' -]/; //--- OL SYMBOLS INPUT

var RegexOlLang = /^[а-яА-Яa-zA-Z-іІїЇєЄґҐ' -]+$/; //--- OL LANG INPUT
var CharRegexOlLang = /[а-яА-Яa-zA-Z-іІїЇєЄґҐ' -]/; //--- OL LANG INPUT

var RegexCyrLang = /^[а-яА-Яа-іІїЇєЄґҐ' -]+$/; //--- CYRILlIC LANG INPUT
var CharRegexCyrLang = /[а-яА-Яа-іІїЇєЄґҐ' -]/; //--- CYRILlIC LANG INPUT

var RegexLatLang = /^[a-zA-Z-]+$/; //--- OL LANG INPUT
var CharRegexLatLang = /[a-zA-Z-]/; //--- OL LANG INPUT

var RegNumb = /^[0-9\.]+$/;
var CharRegNumb = /[0-9\.]+$/;

var RegexMail = /^[0-9-a-zA-Z - _ @ .]+$/; // --- EMAIL INPUTS
var CharRegexMail = /[0-9-a-zA-Z - _ @ .]/; // --- EMAIL INPUTS


$(document).ready(function () {
    // --- REGULARS
            // -- FOR CYRILLIC :
    $('[ valid-lang="cyr"]').on('paste', function(e) {
        var newValue = e.originalEvent.clipboardData.getData('Text');
        if (!RegexCyrLang.test(newValue)) {
            e.stopPropagation();
            return false;
        }
    });
    $('[ valid-lang="cyr"]').keypress(function(e) {
        return CharRegexCyrLang.test(e.key);
    });
        // -- FOR LATIN :
    $('[ valid-lang="lat"]').on('paste', function(e) {
        var newValue = e.originalEvent.clipboardData.getData('Text');
        if (!RegexLatLang.test(newValue)) {
            e.stopPropagation();
            return false;
        }
    });
    $('[ valid-lang="lat"]').keypress(function(e) {
        return CharRegexLatLang.test(e.key);
    });
    // -- FOR NUMBERS :
    $('[ valid-lang="numb"]').on('paste', function(e) {
        var newValue = e.originalEvent.clipboardData.getData('Text');
        if (!RegNumb.test(newValue)) {
            e.stopPropagation();
            return false;
        }
    });
    $('[ valid-lang="numb"]').keypress(function(e) {
        return CharRegNumb.test(e.key);
    });
    // -- FOR OLL LANG :
    $('[ valid-lang="oll-lang"]').on('paste', function(e) {
        var newValue = e.originalEvent.clipboardData.getData('Text');
        if (!RegexOlLang.test(newValue)) {
            e.stopPropagation();
            return false;
        }
    });
    $('[ valid-lang="oll-lang"]').keypress(function(e) {
        return CharRegexOlLang.test(e.key);
    });
    // -- FOR OLL LANG AND NUMBERS :
    $('[ valid-lang="oll"]').on('paste', function(e) {
        var newValue = e.originalEvent.clipboardData.getData('Text');
        if (!RegexOlSymb.test(newValue)) {
            e.stopPropagation();
            return false;
        }
    });
    $('[ valid-lang="oll"]').keypress(function(e) {
        return CharRegexOlSymb.test(e.key);
    });
    // -- FOR EMEIL :
    $('[ valid-lang="email"]').on('paste', function(e) {
        var newValue = e.originalEvent.clipboardData.getData('Text');
        if (!RegexMail.test(newValue)) {
            e.stopPropagation();
            return false;
        }
    });
    $('[ valid-lang="email"]').keypress(function(e) {
        return CharRegexMail.test(e.key);
    });

    //---------- ONE OFF CHECKBOXES ROW ONE CHECKED OTHER DISABLED
    $('[valid-group="checkboxrow-one-off-dis"] [type="checkbox"]').click(function() {
        if ($(this).is(':checked')) {
            $(this).parents('[valid-group="checkboxrow-one-off-dis"]').find('input').each(function () {
                $(this).prop("disabled", !this.checked);
            })
        }
        else {
            $(this).parents('[valid-group="checkboxrow-one-off-dis"]').find('input').each(function () {
                $(this).prop("disabled", false);
            })
        }
    });

    //---------- ONE OFF CHECKBOXES ROW ONE CHECKED OTHER UNCHECKED
    $('[valid-group="checkboxrow-one-off"] [type="checkbox"]').click(function() {

        $(this).parents('[valid-group="checkboxrow-one-off"]').find('input').each(function () {
            if ($(this).is(':checked')) {
                $(this).prop("checked", !this.checked);
            }
        })
        $(this).prop("checked", true);
    });

    $(".validthis-submint").on('click', function (e) {
        var errorClass = $(this).parents('form').attr('valid-errorclass')
        console.log("validthis-submint cliked")
        e.preventDefault();
       var novalid = 0;
        $(this).parents('form').find('.valid-this').each(function () {
            console.log("validthis each funk is init")
            // --- VALID MIN LENGTH
            if ($(this).is('[valid-min-leng]')){
                x = Number($(this).attr('valid-min-leng'))
                //console.log("min length: "+x)
                if ($(this).val().length < x){
                    $(this).attr('valid-status','false')
                }
                else{
                    $(this).attr('valid-status','true')
                }
            }
            // --- VALID MAX LENGTH
            if ($(this).is('[valid-max-leng]')){
                x = Number($(this).attr('valid-min-leng'))
                //console.log("min length: "+x)
                if ($(this).val().length > x){
                    $(this).attr('valid-status','false')
                }
                else{
                    $(this).attr('valid-status','true')
                }
            }
            // --- VALID CHECKBOX
            if ($(this).is('[type="checkbox"]')){
                if ($(this).is(':checked')){
                    $(this).attr('valid-status','true').parents('label').attr('valid-status','true')
                }
                else{
                    $(this).attr('valid-status','false').parents('label').attr('valid-status','false')
                }
            }
            // --- VALID FOR EMAIL
            if(($(this).is('[valid-lang="email"]'))&&($(this).val().indexOf('@')>-1)&&($(this).val().indexOf('.')>-1)&&($(this).val().indexOf('.') < $(this).val().length - 2)){
                $(this).attr('valid-status','true')
            }
            else{ $(this).attr('valid-status','false')}
            // ----- VALIDATION FOR CHECKBOXES GROUP  -----
            if ($(this).is('[valid-group="checkboxrow"]')){
                y = 0;
                $(this).find('[type="checkbox"]').each(function () {
                    if($(this).is(':checked')){
                        ++y
                    }
                })
                if(y > 0){
                    $(this).attr('valid-status','true')
                }
                else{ $(this).attr('valid-status','false')}
            }
            // ----- VALIDATION FOR CHECKBOXES ONE_OFF GROUP  -----
            if ($(this).is('[valid-group="checkboxrow-one-off"]')){
                y = 0;
                $(this).find('[type="checkbox"]').each(function () {
                    if($(this).is(':checked')){
                        ++y
                    }
                })
                if(y > 0){
                    $(this).attr('valid-status','true')
                }
                else{ $(this).attr('valid-status','false')}
            }

            // ----- VALIDATION FOR SELECT  -----
            if ($(this).is('[valid-group="select"]')){
                y = 0;
                if($(this).val()){
                    $(this).attr('valid-status','true')
                }
                else{ $(this).attr('valid-status','false')}
            }

        //    -----
            if($(this).is('[valid-group="inputtext-one-off"]')){
                console.log("valid-group=inputtext-one-off IS")
                s = 0;
                $(this).find('input').each(function () {
                    if ($(this).is('[valid-min-leng]')){
                        x = Number($(this).attr('valid-min-leng'))
                        //console.log("min length: "+x)
                        if ($(this).val().length > x){
                            $(this).attr('valid-status','true')
                        }
                        else{
                            $(this).attr('valid-status','truefalse')
                        }
                    }
                    if ($(this).is('[valid-max-leng]')){
                        x = Number($(this).attr('valid-min-leng'))
                        //console.log("min length: "+x)
                        if ($(this).val().length < x){
                            $(this).attr('valid-status','true')
                        }
                        else{
                            $(this).attr('valid-status','truefalse')
                        }
                    }
                })
                $(this).find('input').each(function () {
                    if($(this).attr('valid-status') == 'true'){
                        ++s
                    }
                })
                if (s > 0){
                    $(this).attr('valid-status','true')
                }
                else{
                    $(this).attr('valid-status','false')
                }
            }
        })

        $(this).parents('form').find('.valid-this').each(function () {
            if($(this).attr('valid-status') == 'false'){
                ++novalid
                $(this).addClass(errorClass)
            }
            else if($(this).attr('valid-status') == 'true'){

                $(this).removeClass(errorClass)
            }
        })

        if(novalid > 0){
            $(this).parents('form').attr('valid-form-status','false')
            console.log("form is not valid")
        }
        else if(novalid == 0){
            $(this).parents('form').attr('valid-form-status','true')
            console.log("success")
        }
    })


//    ------ PHONE FORMATS:
    $('.phone-format').focus(function () {
        $(this).attr('placeholder', '380(99)999-99-99');
    })
    $('.phone-format').keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
        else if (e.which == 8){ return true}
        var curchr = this.value.length;
        var curval = $(this).val();
        if (curchr == 3 ) {
            $(this).val("+" + curval + "(");
        } else if (curchr == 7 && curval.indexOf("(") > -1) {
            $(this).val(curval + ")");
        } else if (curchr == 11 && curval.indexOf(")") > -1) {
            $(this).val(curval + "-");
        } else if (curchr == 14) {
            $(this).val(curval + "-");
            $(this).attr('maxlength', '17');
            $(this).attr('minlength', '10');
        }
    });
})


