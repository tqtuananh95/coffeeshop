$(function () {
    // Close the dropdown if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.add-banner') && !event.target.matches('.btn-close')) {
            var formOption = document.getElementsByClassName("form-option");
            for (var i = 0; i < formOption.length; i++) {
                formOption[i].style.display = 'none';
            }
        }
    }

    // $( "body").find("div[class^=banner-]").css('border', '1px solid black');
    // BANNER option btn ADD NEW click
    $(document).on("click", ".add-banner", function (event) {
        var parent = $(event.target).parent();
        if (parent.find('.form-option').css('display') == 'none')
            parent.find('.form-option').show();
        else
            parent.find('.form-option').hide();
    });

    // BANNER option btn close click
    $(document).on("click", ".btn-close", function (event) {
        $(event.target).parent().hide();
    });

    // BANNER option btn add click
    $(document).on("click", ".btn-add", function (event) {
        $(event.target).parent().hide();
        var classParent = $(event.target).parent().parent().parent().attr('class');
        classParent = parseInt(classParent.replace('banner-', '')) + 1;
        var html = `
            <div class="banner-${classParent}">
            <div class="group-option">
                <button class="badge badge-danger delete-banner"><i class="fa fa-trash"></i> Delete</button>
                <button class="badge badge-success add-banner"><i class="fa fa fa-plus fa-lg"></i> ADD NEW</button>
                <div class="form-option">
                    <div class="form-group">
                        <label for="">&nbsp;BANNER</label>
                        <div class="col pb-1">
                            <select class="form-control">
                                <option value="1">Banner Đơn</option>
                                <option value="2">Banner Đôi</option>
                            </select>
                        </div>
                        <div class="col">
                            <select class="form-control">
                                <option value="1">Banner Lớn</option>
                                <option value="2">Banner Nhỏ</option>
                            </select>
                        </div>
                        <label for="">&nbsp;CHIỀU DÀI</label>
                        <div class="col">
                            <input type="number" class="form-control" placeholder="0 PX">
                        </div>
                        <label for="">&nbsp;CHIỀU CAO</label>
                        <div class="col">
                            <input type="number" class="form-control" placeholder="0 PX">
                        </div>
                    </div>
                    <button type="button" class="badge badge-success btn-add"><i class="fa fa fa-plus"></i>ADD</button>
                    <button type="button" class="badge badge-danger btn-close"><i class="fa fa-times"></i>CLOSE</button>
                </div>
            </div>
            <div class="bannerHome bannerHomeLarg text-center">
                <img src="/images/no-image-blue.png" alt="" width="25%" height="350px">
                <i class="fa fa-upload fa-lg upload-banner">THÊM ẢNH BANNER<input type="file" style="display: none;"></i>
            </div>
        </div>`;
        $(event.target).parent().parent().parent().after(html);
    });
    
    // delete Banner group
    $(document).on("click", ".delete-banner", function (event) {
        $(event.target).parent().parent().hide();
    });

    // add Image
    $(document).on("click", ".upload-banner", function (event) {
        $(event.target).parent().find('input[type="file"]').trigger("click");
    });
    
    $(document).on("change", 'input[type="file"]', function (e) {
        console.log("ZOOO", e);
    });

    // Stop script
    $(document).on("click", 'input[type="file"]', function (e) {
        e.stopPropagation();
    });
    
});