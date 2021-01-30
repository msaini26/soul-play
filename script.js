// google forms url
//https://docs.google.com/forms/d/133m_7hfnB58GfVzzI8W5NF8nJHkJQKajTc4dF-GqtHE/edit
// id: 133m_7hfnB58GfVzzI8W5NF8nJHkJQKajTc4dF-GqtHE

// Open a form by ID and log the responses to each question.
var form = FormApp.openById('133m_7hfnB58GfVzzI8W5NF8nJHkJQKajTc4dF-GqtHE');
var formResponses = form.getResponses();

for (var i = 0; i < formResponses.length; i++) {
    var formResponse = formResponses[i];
    var itemResponses = formResponse.getItemResponses();
    for (var j = 0; j < itemResponses.length; j++) {
        var itemResponse = itemResponses[j];
        Logger.log('Response #%s to the question "%s" was "%s"',
            (i + 1).toString(),
            itemResponse.getItem().getTitle(),
            itemResponse.getResponse());
    }
}

function onSubmit(e) {
    /* Get values entered by filling the form */
    var itemResponses = e.response.getItemResponses();
    for (var j = 0; j < itemResponses.length; j++) {
        var itemResponse = itemResponses[j];
        console.log('Response #%s to the question "%s" was "%s"',
            (i + 1).toString(),
            itemResponse.getItem().getTitle(),
            itemResponse.getResponse());
    }
    //var myWantedValue = itemResponses[COLUMN_NUMBER].getResponse();
}



/*function onSubmit(e) {
    var form = FormApp.openById('133m_7hfnB58GfVzzI8W5NF8nJHkJQKajTc4dF-GqtHE');

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Master');


    var data = sheet.getDataRange().getValues();
    //var urlCol = 26;
    var responses = form.getResponses();
    var timestamps = [], urls = [], resultUrls = [];

    for (var i = 0; i < responses.length; i++) {
      timestamps.push(responses[i].getTimestamp().setMilliseconds(0));
      urls.push(responses[i].getEditResponseUrl());
    }
    for (var j = 1; j < data.length; j++) {

      resultUrls.push([data[j][0]?urls[timestamps.indexOf(data[j][0].setMilliseconds(0))]:'']);
    }
    sheet.getRange(2, urlCol = 27, resultUrls.length).setValues(resultUrls);

    return resultUrls;
  };*/
