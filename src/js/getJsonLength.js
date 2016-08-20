/**
 * Created by my on 2016/7/25.
 */
function getJsonLength(item,jsonData){

    var jsonLength = 0;

    for(var item in jsonData){

        jsonLength++;

    }
    return jsonLength;
}


