




var questionDict = [
    {
        question: 'What is your gender?',
        choices:['Male','Female'],
        type:'radio',
        name:'gender'
    },
    {
        question: 'What is your favorite car?',
        choices:['0-20','21-30','31-40','41-50','51-60','61-70','71-80'],
        type:'select'
    },
    {
        question: 'Please provide the following info.',
        choices:['First Name','Last Name','Email'],
        type:'input'
    }
]

function nextClicked(val){

    //set index
    var index = parseInt(val)+1
    console.log(index)

    //if this is the last question... hide after clicking next
    if(index>=questionDict.length){
        $('#survey-modal-main-container').removeClass('survey-in-animation')
        $('#survey-modal-main-container').addClass('survey-out-animation')

        setTimeout(function(){
            $('.survey-out-animation').fadeOut()
        },1000)
    } else{
        //change value of button
        toString(index)
        document.getElementById('next-button').value = index

        //change question text
        parseInt(index)
        var questionText = document.getElementById('question-text')
        questionText.textContent = questionDict[index].question

        //remove current choices
        var choiceContainer = document.getElementById('main-form')
        choiceContainer.innerHTML = ''
        
        //change choices
        var choiceArr = questionDict[index].choices
        var choiceInsert = ''

        if(index==1){
            choiceInsert+=`<select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>`
            choiceContainer.innerHTML = choiceInsert

        } else if(index==2){
            choiceInsert+=`<input type='text'>`
            choiceContainer.innerHTML = choiceInsert
        }



        //loop trough and render choices
        // for(var i=0;i<choiceArr.length;i++){
        //     // <input type="radio" name="gender" id="male" value="male">
        //     // <label for="male">Male</label><br>

        //     // choiceInsert+="<input type='"+questionDict[index].type+"' name='"+questionDict[index].name+"' id='"+choiceArr[i].toLowerCase()+"'"
        //     // choiceInsert+="<label for='"+choiceArr[i].toLowerCase+"'>"+choiceArr[i]+"</label><br>"
        // }

        

    }


}



$(document).ready(function(){
    //alert('loaded')

    var body = $('body')
    var insert = '<p>test</p>'

    //remove modal when x is clicked
    $('#survey-x-button').click(function(){
        $('#survey-modal-main-container').removeClass('survey-in-animation')
        $('#survey-modal-main-container').addClass('survey-out-animation')

        setTimeout(function(){
            $('.survey-out-animation').fadeOut()
        },1000)
        
    })
    
    //change question text
    $('#question-text').text(questionDict[0].question)
   

    


 
})

