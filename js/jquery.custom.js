function pageLoad(){
	$('#wrapper').show();
};
$(function(){
	
	$(".form-control").focus(function() {
		$(this).parent().addClass('focus');
	});
	$(".form-control").blur(function() {
		if($(this).val().length < 1){
			$(this).parent().removeClass('focus');
		} else {
			$(this).parent().addClass('focus');
		}
	});
	checkFieldsValue();
	
	
	// for Custom Select
	var flag = false;
	$('.custom-select ul li a').click(function(e){
		var parentID = $(this).parents().eq(2).prop("id");
		$('#'+ parentID + ' .form-control').text($(this).text());
		$('#'+ parentID + ' .hidden-field').val($(this).text());
		$('.custom-select').removeClass('active');
		flag = false;
	});
	
	var _id;
	$('.custom-select strong').click(function(e){
				
		if(_id != $(this).parent().prop('id'))
			flag=false;
			
		if(flag==false){
			$(this).parent().addClass('active');
			flag=false;
		} else {
			$(this).parent().removeClass('active');
			flag=false;
		}
		
			
		_id = $(this).parent().prop('id');
	});
	
	
	$(document).mouseup(function(e){
		var container = $(".custom-select ul, .ui-datepicker");
		
		if (!container.is(e.target)
			   && container.has(e.target).length === 0)
		{
			$('.custom-select').removeClass('active');
			if($('.date-holder').val()=='')
				$('.date-holder').removeClass('focus');
		}
	});
	
	
	
	var idCount = 1;
	$('.appoint-posts .post').each(function() {
		$(this).attr('id', 'post' + idCount);
		idCount++;
	});
	
	
	// appoint-posts author
	$('.appoint-posts .title').each(function() {
		$(this).attr('id', 'title' + idCount);
		idCount++;
	});
	
	$('.appoint-posts .title a').attr('href','javascript:;')
	$('.appoint-posts .author-dropdown a').click(function(e){
		var parentID = $(this).parents().eq(3).prop("id");
		$('#'+ parentID + ' .author').addClass('assign').html($(this).html());
		$('.appoint-posts .title').removeClass('open');
	});
	
	// appoint-posts status-opener
	$('.appoint-posts .status').each(function() {
		$(this).attr('id', 'status' + idCount);
		idCount++;
	});
	
	$('.appoint-posts .status li a').click(function(e){
		var parentID = $(this).parents().eq(2).prop("id");
		$('#'+ parentID + ' .status-opener').html($(this).html());
		$('#'+ parentID + ' .hidden-field').val($(this).text());
		$('.appoint-posts .status').removeClass('open');
	});
	
	// your comments
	$('.comments blockquote.your q').wrapInner('<span></span>')
	
	
	
	// for datepicker
	$("#datepicker").datepicker({
		showOtherMonths: true,
		gotoCurrent: true,
		duration: "fast",
		dateFormat: 'DD, MM d, yy',
		onSelect : function(a){
			$('.book-new .date-holder').val(a);
			$('.book-new .date-holder').addClass('active focus');
			$('.timing').show();
		},
		onClose : function(){
			$('.book-new .date-holder').removeClass('active');
		},
		beforeShow: function(input, inst) {
			$('#ui-datepicker-div').addClass('main-datepicker');
		},
	});
	
	
	$(".book-new .date-holder .form-control").focus(function() {
		$(this).parent().addClass('active');
	});
	$(".book-new .date-holder .form-control").change(function(){
		if($(this).val().length > 1){
			$('.timing').show();
		} else {
			$('.timing').hide();
		}
	});
	$('.timing').hide();
	if($('.book-new .date-holder').hasClass("focus")){
		$('.timing').show();
	}
	else {
		$('.timing').hide();
	}
	
	
	// for timing section
	$(".timing .time-holder .btn").click(function() {
		$('.timing').addClass('selected');
	});
	$(".timing .selected-time .btn").click(function() {
		$('.timing').removeClass('selected');
	});
	$('.timing .time-holder .btn').click(function(e){
		$('.timing .selected-time time').text($(this).text());
	});
	
	
	$('#appointment-datepicker').datepicker({
		showOtherMonths: true,
		gotoCurrent: true,
		duration: "fast",
	});
	$('.ui-datepicker .ui-state-default').removeClass('ui-state-hover');
	
	$('#reschedule-date').datepicker({
		beforeShow: function(input, inst) {
			$('#ui-datepicker-div').addClass('reschedule-date');
		},
		dateFormat: 'MM dd, yy',
		onSelect : function(a){
			$('.date-holder').removeClass('active');
		},
		onSelect: function(dateText, inst) {
			var suffix = "";
			switch(inst.selectedDay) {
				case '1': case '21': case '31': suffix = 'st'; break;
				case '2': case '22': suffix = 'nd'; break;
				case '3': case '23': suffix = 'rd'; break;
				default: suffix = 'th';
			}
				var d = inst.selectedDay + suffix;
				var m = inst.selectedMonth;
				var y = inst.selectedYear;
				var monthNames= [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
			$("#reschedule-date").val(monthNames[m] + ' ' + d + ', ' + y);
		},
		onClose : function(){
			$('.date-holder').removeClass('active');
		}
	});
	$('#reschedule-date').focus(function(){
		$(this).parent().addClass('active');
	});
	
	var ordinalSuffix = function (val) {
	var mod = val % 10;
		if (mod === 1 && val !== 11) {
		return 'st';
		} else if (mod === 2 && val !== 12) {
		return 'nd';
		} else if (mod === 3 && val !== 13) {
		return 'rd';
		} else {
		return 'th';
		}
	};
	// range calender
	$('.start .range-calender').datepicker({
		showOtherMonths: true,
		gotoCurrent: true,
		altField: ".date-start",
		onSelect: function(dateText, inst) {
			var suffix = "";
			switch(inst.selectedDay) {
				case '1': case '21': case '31': suffix = 'st'; break;
				case '2': case '22': suffix = 'nd'; break;
				case '3': case '23': suffix = 'rd'; break;
				default: suffix = 'th';
			}
				var d = inst.selectedDay + suffix;
				var m = inst.selectedMonth;
				var y = inst.selectedYear;
				var monthNames= [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
			$(".date-start").val(monthNames[m] + ', ' + d + ' ' + y);
		}
	});
	$('.end .range-calender').datepicker({
		showOtherMonths: true,
		gotoCurrent: false,
		altField: ".date-end",
		onSelect: function(dateText, inst) {
			var suffix = "";
			switch(inst.selectedDay) {
				case '1': case '21': case '31': suffix = 'st'; break;
				case '2': case '22': suffix = 'nd'; break;
				case '3': case '23': suffix = 'rd'; break;
				default: suffix = 'th';
			}
				var d = inst.selectedDay + suffix;
				var m = inst.selectedMonth;
				var y = inst.selectedYear;
				var monthNames= [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
			$(".date-end").val(monthNames[m] + ', ' + d + ' ' + y);
		}
	});
	
	// Billing date range
	$('#start-date .calender').datepicker({
		showOtherMonths: true,
		dateFormat: 'mm/dd/y',
		altField: "#start-date .form-control",
		onSelect : function(){
			$('#start-date').removeClass('active');
		}
	});
	$('#end-date .calender').datepicker({
		showOtherMonths: true,
		dateFormat: 'mm/dd/y',
		altField: "#end-date .form-control",
		onSelect : function(){
			$('#end-date').removeClass('active');
		}
	});
	$('#start-date .form-control, #end-date .form-control').val('');
	
	
	$('.date-start, .date-end').val('Not yet selected');
	$('.filter-post .date-range .btn, .filter-post td a').click(function(){
		$('.filter-post time.date-start').text($('.filter-post input.date-start').val());
		$('.filter-post time.date-end').text($('.filter-post input.date-end').val());
	});
	
	// filter block management
	$('.filter-post .btn-range, .filter-post .change').click(function(){
		$('.filter-post > div').hide();
		$('.filter-post .date-range').show();
		$('html,body').animate({ scrollTop: $('.filter-post').offset().top}, 1000)
	});
	$('.filter-post .date-range .show').click(function(){
		$('.filter-post > div').hide();
		$('.filter-post .show-range').show();
	});
	$('.filter-post .cancel').click(function(){
		$('.filter-post > div').hide();
		$('.filter-post .custom-select').show();
		$('.filter-post .custom-select .form-control').text('To See More Appointments Select Month');
		$('.filter-post .custom-select .hidden-field').val('');
		$('.filter-post td a').removeClass('ui-state-active');
		$("html, body").animate({ scrollTop: $('.your-appointments').offset().top}, 1000);
	});
	
	
	
	
	// appointments posts
	$('.appoint-posts .btn-opener').click(function(){
		var parentID = $(this).parent().prop("id");
		$(this).parent().toggleClass('active');
		$('html,body').animate({ scrollTop: $('#'+ parentID).offset().top}, 500);
		flag = false;
	});
	
	// comment form
	$('.comment-form .btn-comment').on('click',function(e){
		var parentID = $(this).parent().prop("id");
		$('#'+ parentID).addClass('active');
		flag = false;
	});
	$('.comment-form .cancel').click(function(e){
		var parentID = $(this).parents().eq(2).prop("id");
		$('#'+ parentID).removeClass('active');
		flag = false;
	});
	
	// popup active
	$('.popup-opener, .overlay, .popup-close').attr('href','javascript:;');
	$('.popup-opener').click(function(){
		var _targetLink = $(this).attr("data-target");
		$(_targetLink).addClass('active');
		$('.overlay').addClass('active');
	});
	// popup close
	$('.overlay, .popup-close').click(function(){
		$('.popup, .overlay').removeClass('active');
		$('.popup.reschedule .step1').show();
		$('.popup.reschedule .step2').hide();
		$(".popup input[type=radio], .popup input[type=checkbox]").prop('checked', false);
	});
	
	// popup reschedule
	$('.popup.reschedule .continue').click(function(){
		$('.popup.reschedule .step1').hide();
		$('.popup.reschedule .step2').show();
	});
	
	// popup schedule cancel
	$('.schedule-cancel input[type=radio]').change(function(){
		if($('.schedule-cancel #other-reason').is(':checked')){
			
			$('.schedule-cancel .note-box').css('display','block');
		} else {
			$('.schedule-cancel .note-box').css('display','none');
		}
	});
	
	// popup invitation
	$('.popup.invitation button[type=submit]').click(function(){
		$('.popup.invitation .sent').show();
		setTimeout(function() {
			$('.popup.invitation .form-control').attr('placeholder','Enter another email');
			$('.popup.invitation .sent').hide();
		}, 2000);
	});
	
	// popup rating
	$('.popup.rating .custom-select > ul a').click(function(){
		$('.popup.rating textarea.form-control').removeClass('disable');
		$('.popup.rating .submit').hide();
		$('.popup.rating .btn').show();
	});
	
	
	// book-new tabs
	$('.book-new .nav-tabs a').click(function(){
		$('.book-new .tab-content h2').show();
	});
	
	$('.book-new .nav-tabs a').click(function(){
		$(".book-new .tab-content .btn").removeClass('active');
		$(".book-new .tab-content input[type=radio]").prop('checked', false);
	});
	$('.book-new input[type=radio]').change(function(){
		if($('#cleaning ul li:last-child input[type=radio]').is(':checked')){
			$('.book-new .result .btn .monthly').css('display','block');
		} else {
			$('.book-new .result .btn .monthly').hide();
		}
	});
	
	
	// My Account Page
	// personal
	$('.my-account .personal .btn-edit').click(function(){
		$(this).hide();
		$('.my-account .personal > ul').hide();
		$('.my-account .personal form').show();
	});
	$('.my-account .personal .cancel').click(function(){
		$('.my-account .personal .btn-edit').show();
		$('.my-account .personal > ul').show();
		$('.my-account .personal form').hide();
	});
	
	// password
	$('.my-account .password h2 a, .my-account .password .cancel').click(function(){
		$('.my-account .password form').toggle();
	});
	
	// payment
	$('.my-account .payment .btn-edit').click(function(){
		$(this).hide();
		$('.my-account .payment > ul').hide();
		$('.my-account .payment form').show();
	});
	$('.my-account .payment .cancel').click(function(){
		$('.my-account .payment .btn-edit').show();
		$('.my-account .payment > ul').show();
		$('.my-account .payment form').hide();
	});
	
	// location
	/*$('.my-account .location .edit, .my-account .location .cancel').click(function(e){
		var parentID = $(this).parents().eq(2).prop("id");
		$('#'+ parentID).toggleClass('active');
		flag = false;
	});*/
	$('.my-account .add, #add-location2 .cancel').click(function(e){
		$('#add-location2').toggleClass('in');
		$('html,body').animate({ scrollTop: $('#add-location2').offset().top}, 500);
	});
	
	// for mobile
	$('.appoint-posts .opener').on('click',function(){
		var parentID = $(this).parent().prop("id");
		$('.appointments-slide').addClass('appoint-posts').html($('#'+ parentID + ' .slide').html());
		$('.upcoming-appointments, .your-appointments').addClass('hidden');
		$('html, body').animate({ scrollTop: $(".appointments-slide").offset().top}, 500);
		
		$('.comment-form .btn-comment').bind('click',function(e){
			$(this).parent().toggleClass('active');
		});
		$('.comment-form .cancel').bind('click',function(e){
			$(this).parents().eq(2).removeClass('active');
		});
		$(".appoint-posts .btn-back").bind('click',function() {
			$('.upcoming-appointments, .your-appointments').removeClass('hidden');
			$('.appointments-slide').empty();
			$('html,body').animate({ scrollTop: $(".your-appointments").offset().top}, 500);
		});
		$('.appoint-posts .author').click(function(){
			$(this).parent().toggleClass('open');
		});
		
		// popup active
		$('.popup-opener').bind('click',function(e){
			var _targetLink = $(this).attr("data-target");
			$(_targetLink).addClass('active');
			$('.overlay').addClass('active');
		});
		// popup close
		$('.overlay, .popup-close').bind('click',function(e){
			$('.popup, .overlay').removeClass('active');
			$('.popup.reschedule .step1').show();
			$('.popup.reschedule .step2').hide();
			$(".popup input[type=radio], .popup input[type=checkbox]").prop('checked', false);
		});
		
		
		$('.appoint-posts .author-dropdown a').click(function(e){
			var parentID = $(this).parents().eq(3).prop("id");
			$('#'+ parentID + ' .author').addClass('assign').html($(this).html());
			$('.appoint-posts .title').removeClass('open');
		});
		
		$('.appoint-posts .status li a').click(function(e){
			var parentID = $(this).parents().eq(2).prop("id");
			$('#'+ parentID + ' .status-opener').html($(this).html());
			$('#'+ parentID + ' .hidden-field').val($(this).text());
			$('.appoint-posts .status').removeClass('open');
		});
		
		jQuery('.appoint-posts .status').mobileNav({
			hideOnClickOutside: true,
			menuActiveClass: 'open',
			menuOpener: '.status-opener',
			menuDrop: '.status-dropdown'
		});
	});
	
	
	// supplies popup
	$('#supplies-popup .btn-disabled').click(function(){
		$('.cleaning-supplies ul li:first-child .btn').removeClass('active');
		$('.cleaning-supplies ul li:nth-child(2) .btn').addClass('active');
		$(".cleaning-supplies ul li:first-child input[type=radio]").prop('checked', false);
		$(".cleaning-supplies ul li:nth-child(2) input[type=radio]").prop('checked', true);
	});
	$('#supplies-popup .btn-success').click(function(){
		$('.cleaning-supplies ul li:first-child .btn').addClass('active');
		$('.cleaning-supplies ul li:nth-child(2) .btn').removeClass('active');
		$(".cleaning-supplies ul li:first-child input[type=radio]").prop('checked', true);
		$(".cleaning-supplies ul li:nth-child(2) input[type=radio]").prop('checked', false);
	});
	
	
	
	// new appontment page mobile
	$('.book-new .price-box .btn-success').click(function(){
		$('.book-new .block').hide();
		$('.book-new .summary').show();
		$('html,body').animate({ scrollTop: 0}, 0);
	});
	
	// payment-popup
	$('.payment-popup .custom-select ul li a').click(function(){
		var parentID = $(this).parents().eq(2).prop("id");
		$('#'+ parentID + ' .form-control').html($(this).html());
		$('.payment-popup .btn').removeClass('hidden').text('Apply Payment');
	});
	$('.payment-popup .card-opener').click(function(){
		$('.payment-popup .btn').text('Process Card');
	});
	
	// refund popup
	$('.refund-popup .btn').click(function(){
		$('#refund').removeClass('active');
		$('#refund-info').addClass('active');
	});
	$('.refund-popup ul input[type="radio"]').change(function(){
		if($('.refund-popup #partial-refund').is(':checked')){
			$('.refund-popup .price-box').show()
		} else {
			$('.refund-popup .price-box').hide()
		}
	});
	
	// Points
	$('.user-info .points a.more').click(function(){
		$('.user-info .points .history').addClass('auto-scroll');
	});
	
	
	// Notes
	$('.user-info .note-pager .add-note').click(function(){
		$('.user-info .new-note').show();
		$('.user-info .new-note textarea').val('');
	});
	$('.user-info .new-note .btn-cancel').click(function(){
		$('.user-info .new-note').hide();
	});
	
	// Email
	tinymce.init({
		selector:'.email-form textarea',
		menubar: false,
		statusbar: false,
	});
	
	$('.user-info .email-form .btn').click(function(){
		$('.email-form').addClass('succ');
	});
	
	
	
	
	// select location
	$('.select-location a').attr('href','javascript:;')
	$('.select-location ul li a').click(function(e){
		$('.select-location .opener span').html($(this).text());
		$('.select-location').removeClass('open');
		$('.select-location ul li').removeClass('active');
		$(this).parent().addClass('active');
	});
	
	
	// for Extra inner options
	$('.extra-opener').click(function(){
		$(this).toggleClass('selected');
		$(this).removeClass('active');
		$('.windown-opener, .laundry-opener').removeClass('selected');
		$('.extra-slide').toggleClass('in');
		$('.windown-slide, .laundry-slide').removeClass('in');
	});
	$('.windown-opener').click(function(){
		$(this).toggleClass('selected');
		$(this).removeClass('active');
		$('.extra-opener, .laundry-opener').removeClass('selected');
		$('.windown-slide').toggleClass('in');
		$('.extra-slide, .laundry-slide').removeClass('in');
	});
	$('.laundry-opener').click(function(){
		$(this).toggleClass('selected');
		$(this).removeClass('active');
		$('.windown-opener, .extra-opener').removeClass('selected');
		$('.laundry-slide').toggleClass('in');
		$('.windown-slide, .extra-slide').removeClass('in');
	});
	$('.book-new .extras .inner .btn').click(function(){
		$('.extra-slide, .windown-slide, .laundry-slide').removeClass('in');
		$('.extra-opener, .windown-opener, .laundry-opener').removeClass('selected');
	});
	$('.extra-slide .btn').click(function(){
		$('.extra-opener').addClass('active');
	});
	$('.windown-slide .btn').click(function(){
		$('.windown-opener').addClass('active');
	});
	$('.laundry-slide .btn').click(function(){
		$('.laundry-opener').addClass('active');
	});
	$('.book-new .extras .btn').click(function(){
		if(!$(this).hasClass('opener')){
			if($(this).children().eq(0).is(':checked')){
				$(this).addClass('active');
				$('.extra-slide, .windown-slide, .laundry-slide').removeClass('in');
				$('.extra-opener, .windown-opener, .laundry-opener').removeClass('selected');
			} else {
				$(this).removeClass('active');
			}
		}
	});
	
	
	// credit Card
	$('#card-number, #card-number2').keyup(function() {
		var result=$(this).validateCreditCard({accept: ['visa', 'mastercard', 'discover', 'amex'] });
		$('.cards li').removeClass('active');
		if(result.card_type.name=='amex')
			$('.cards li.amex').addClass('active');
		else if(result.card_type.name=='discover')
			$('.cards li.discover').addClass('active');
		else if(result.card_type.name=='visa')
			$('.cards li.visa').addClass('active');
		else if(result.card_type.name=='mastercard')
			$('.cards li.mastercard').addClass('active');
	});
	
	
	// customers page
	$('.customers .btn-adv').click(function(){
		$(this).toggleClass('active');
		$('.customers .filter').slideToggle('fast');
	});
	
	
	var eachChange = function(){
		if($(this).is(':checked')){
			$(this).parents().eq(2).addClass('range-active');
		} else {
			$(this).parents().eq(2).removeClass('range-active');
		}
	};
	$('.customers .filter input[type=checkbox]')
		.each(eachChange)
		.change(eachChange);
	
	
	
	// service date
	$('.customers .service-date .calender').datepicker({
		showOtherMonths: true,
		dateFormat: 'mm/dd/y',
		altField: ".customers .service-date .form-control",
		onSelect : function(){
			$('.customers .custom-select').removeClass('active');
		}
	});
	$('.customers .service-start-date .calender').datepicker({
		showOtherMonths: true,
		dateFormat: 'mm/dd/y',
		altField: ".customers .service-start-date .form-control",
		onSelect : function(){
			$('.customers .custom-select').removeClass('active');
		}
	});
	$('.customers .service-end-date .calender').datepicker({
		showOtherMonths: true,
		dateFormat: 'mm/dd/y',
		altField: ".customers .service-end-date .form-control",
		onSelect : function(){
			$('.customers .custom-select').removeClass('active');
		}
	});
	// Account Opened date
	$('.customers .open-date .calender').datepicker({
		showOtherMonths: true,
		dateFormat: 'mm/dd/y',
		altField: ".customers .open-date .form-control",
		onSelect : function(){
			$('.customers .custom-select').removeClass('active');
		}
	});
	$('.customers .open-start-date .calender').datepicker({
		showOtherMonths: true,
		dateFormat: 'mm/dd/y',
		altField: ".customers .open-start-date .form-control",
		onSelect : function(){
			$('.customers .custom-select').removeClass('active');
		}
	});
	$('.customers .open-end-date .calender').datepicker({
		showOtherMonths: true,
		dateFormat: 'mm/dd/y',
		altField: ".customers .open-end-date .form-control",
		onSelect : function(){
			$('.customers .custom-select').removeClass('active');
		}
	});
	$('.customers .filter form .custom-select .form-control').val('');
	
	
	// for Media Query screens
	
	var w = $(this).width();
	if(w<=767){
		$('#main').append("<div class='appointments-slide'></div>");
		
		
		// Appointments calender view
		$('.tabs .btn-calender').click(function(){
			$('#calender-tab').addClass('active');
		});
		$('#calender-tab .btn-close').click(function(){
			$('#calender-tab').removeClass('active');
			$( ".your-appointments .tabs .custom-select li:first-child a" ).trigger( "click" );
		});
		
		$('.cleaning-supplies .btn-see').removeAttr('data-toggle').attr('href','javascript:;');
		$('.cleaning-supplies .btn-see').click(function(){
			$('#supplies-popup').toggleClass('in');
		});
		
		
		$('.customer-detail .address .controller a')
			.removeAttr('data-target')
			.removeClass('popup-opener').click(function(){
				$('.overlay').removeClass('active');
				$('.customer-detail .address form').html($('.popup-pers-info.popup .box').html()).slideDown('fast');
				$('.customer-detail .address form .btn-close').hide();
				
			$('.customer-detail .address form .btn-normal').click(function(){
				$('.customer-detail .address form').slideUp('fast');
			});
		});
	};
});


// only for number field value
$(function(){
	
	var insert = function (index, string, source) {
		return source.substring(0, index) + string + source.substring(index, source.length);
	};
	
	// for any type="tel" field
	$("input[type=tel]").keypress(function (e) {
		if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
			return false;
		}
	});
	
	// for mobile number
	$('#cell-phone, #alt-phone').keyup(function(e){
		if(e.which==32) return false;

		var field_value = $(this).val();
		var last_entry = field_value.substring(field_value.length - 1, field_value.length);

		if(e.keyCode != 8) {
			if (isNaN(last_entry)) {
				$(this).val(field_value.substr(0, field_value.length - 1));
			} else if (field_value.length > 2 && field_value[3] != '-')
				$(this).val(insert(3, '-', field_value));
			else if (field_value.length > 7 && field_value[7] != '-')
				$(this).val(insert(7, '-', field_value));
		}
	});
	$('#card-number').keyup(function(e){
		if(e.which==32) return false;

		var field_value = $(this).val();
		var last_entry = field_value.substring(field_value.length - 1, field_value.length);

		if(e.keyCode != 8) {
			if (isNaN(last_entry)) {
				$(this).val(field_value.substr(0, field_value.length - 1));
			} else if (field_value.length > 3 && field_value[4] != ' ')
				$(this).val(insert(4, ' ', field_value));
			else if (field_value.length > 8 && field_value[9] != ' ')
				$(this).val(insert(9, ' ', field_value));
			else if (field_value.length > 13 && field_value[14] != ' ')
				$(this).val(insert(14, ' ', field_value));
		}
	});
	
});


function checkFieldsValue(){
	$(".form-control").each(function(){
		if($(this).val().length < 1){
			$(this).parent().removeClass('focus');
		} else {
			$(this).parent().addClass('focus');
		}
	});
}


// jQuery Credit Card Validator 1.0

(function() {
	var $,
		__indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
	
	  $ = jQuery;
	
	  $.fn.validateCreditCard = function(callback, options) {
		var bind, card, card_type, card_types, get_card_type, is_valid_length, is_valid_luhn, normalize, validate, validate_number, _i, _len, _ref;
		card_types = [
		  {
			name: 'amex',
			pattern: /^3[47]/,
			valid_length: [15]
		  }, {
			name: 'diners_club_carte_blanche',
			pattern: /^30[0-5]/,
			valid_length: [14]
		  }, {
			name: 'diners_club_international',
			pattern: /^36/,
			valid_length: [14]
		  }, {
			name: 'jcb',
			pattern: /^35(2[89]|[3-8][0-9])/,
			valid_length: [16]
		  }, {
			name: 'laser',
			pattern: /^(6304|670[69]|6771)/,
			valid_length: [16, 17, 18, 19]
		  }, {
			name: 'visa_electron',
			pattern: /^(4026|417500|4508|4844|491(3|7))/,
			valid_length: [16]
		  }, {
			name: 'visa',
			pattern: /^4/,
			valid_length: [16]
		  }, {
			name: 'mastercard',
			pattern: /^5[1-5]/,
			valid_length: [16]
		  }, {
			name: 'maestro',
			pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
			valid_length: [12, 13, 14, 15, 16, 17, 18, 19]
		  }, {
			name: 'discover',
			pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
			valid_length: [16]
		  }
		];
		bind = false;
		if (callback) {
		  if (typeof callback === 'object') {
			options = callback;
			bind = false;
			callback = null;
		  } else if (typeof callback === 'function') {
			bind = true;
		  }
		}
		if (options == null) {
		  options = {};
		}
		if (options.accept == null) {
		  options.accept = (function() {
			var _i, _len, _results;
			_results = [];
			for (_i = 0, _len = card_types.length; _i < _len; _i++) {
			  card = card_types[_i];
			  _results.push(card.name);
			}
			return _results;
		  })();
		}
		_ref = options.accept;
		for (_i = 0, _len = _ref.length; _i < _len; _i++) {
		  card_type = _ref[_i];
		  if (__indexOf.call((function() {
			var _j, _len1, _results;
			_results = [];
			for (_j = 0, _len1 = card_types.length; _j < _len1; _j++) {
			  card = card_types[_j];
			  _results.push(card.name);
			}
			return _results;
		  })(), card_type) < 0) {
			throw "Credit card type '" + card_type + "' is not supported";
		  }
		}
		get_card_type = function(number) {
		  var _j, _len1, _ref1;
		  _ref1 = (function() {
			var _k, _len1, _ref1, _results;
			_results = [];
			for (_k = 0, _len1 = card_types.length; _k < _len1; _k++) {
			  card = card_types[_k];
			  if (_ref1 = card.name, __indexOf.call(options.accept, _ref1) >= 0) {
				_results.push(card);
			  }
			}
			return _results;
		  })();
		  for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
			card_type = _ref1[_j];
			if (number.match(card_type.pattern)) {
			  return card_type;
			}
		  }
		  return null;
		};
		is_valid_luhn = function(number) {
		  var digit, n, sum, _j, _len1, _ref1;
		  sum = 0;
		  _ref1 = number.split('').reverse();
		  for (n = _j = 0, _len1 = _ref1.length; _j < _len1; n = ++_j) {
			digit = _ref1[n];
			digit = +digit;
			if (n % 2) {
			  digit *= 2;
			  if (digit < 10) {
				sum += digit;
			  } else {
				sum += digit - 9;
			  }
			} else {
			  sum += digit;
			}
		  }
		  return sum % 10 === 0;
		};
		is_valid_length = function(number, card_type) {
		  var _ref1;
		  return _ref1 = number.length, __indexOf.call(card_type.valid_length, _ref1) >= 0;
		};
		validate_number = (function(_this) {
		  return function(number) {
			var length_valid, luhn_valid;
			card_type = get_card_type(number);
			luhn_valid = false;
			length_valid = false;
			if (card_type != null) {
			  luhn_valid = is_valid_luhn(number);
			  length_valid = is_valid_length(number, card_type);
			}
			return {
			  card_type: card_type,
			  valid: luhn_valid && length_valid,
			  luhn_valid: luhn_valid,
			  length_valid: length_valid
			};
		  };
		})(this);
		validate = (function(_this) {
		  return function() {
			var number;
			number = normalize($(_this).val());
			return validate_number(number);
		  };
		})(this);
		normalize = function(number) {
		  return number.replace(/[ -]/g, '');
		};
		if (!bind) {
		  return validate();
		}
		this.on('input.jccv', (function(_this) {
		  return function() {
			$(_this).off('keyup.jccv');
			return callback.call(_this, validate());
		  };
		})(this));
		this.on('keyup.jccv', (function(_this) {
		  return function() {
			return callback.call(_this, validate());
		  };
		})(this));
		callback.call(this, validate());
		return this;
	};

}).call(this);