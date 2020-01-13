﻿class TestClass {
    constructor() {
        this.DataArray = [];

        
        this.PopulateList = () => {
            $("#listGroup").html("");  
            $.each(this.DataArray, (index, value) => {
                //let item = '<li class="list-group-item clearfix" style="border-radius: 25px; margin-bottom: 10px;">' + value + '<span class="pull-right button-group"><a href="#" id="' + index + '" class="btn btn-danger" onclick="$object.aTagClicked(' + index + ');"><span class="glyphicon glyphicon-remove"></span></a></span></li>';
                let item = '<li class="list-group-item clearfix" style="margin-left: 3px; ">' + value + '<span class="pull-right button-group"><a href="#" id="' + index + '" onclick="$object.aTagClicked(' + index + ');"><span class="text-danger glyphicon glyphicon-remove"></span></a></span></li>';
                $("#listGroup").append(item);  
            });
        }

        this.aTagClicked = (index) => {
            this.DataArray.splice(index, 1);
            this.PopulateList();
        }
    }

    AttachEvents() {
        console.log($application.GetBaseUrl());
        $("#btnAdd").click(() => {
            this.DataArray.push($("#Name").val());
            this.PopulateList();
        });

        $("#btnSubmit").click(() => {
            fetch($application.GetBaseUrl() + "/Home/GetData", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.DataArray),
            }).then((response) => {
                return response.json();
            }).then((data) => {

            }).catch((error) => {
                console.log(error);
            });            
        });
    }
}
var $object = new TestClass();
$object.AttachEvents();