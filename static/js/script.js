$(document).ready(function() {
    'use strict';

    /****************************************************************/
    /*      Code to display property summary upon clicking box      */
    /****************************************************************/

    $("#bw_box").click(function() {
        $('.prop_detail').hide();
        $("#prop_detail_bw").css('display', 'flex')
    });
    $("#pw_box").click(function() {
        $('.prop_detail').hide();
        $("#prop_detail_pw").css('display', 'flex')
    });
    $("#ft_box").click(function() {
        $('.prop_detail').hide();
        $("#prop_detail_ft").css('display', 'flex')
    });
    $("#sp_box").click(function() {
        $('.prop_detail').hide();
        $("#prop_detail_sp").css('display', 'flex')
    });
});
