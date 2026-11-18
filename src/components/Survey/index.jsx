import{useParams,Link} from "react-router-dom"

function suivant(questionNumber){
  return questionNumber+1
}

function precedent(questionNumber){
    
  console.log({questionNumber})
  if (questionNumber === 1) {
    return questionNumber; // Ne pas afficher le lien si c'est la première question
  }
  return questionNumber - 1
}



function Survey() {
      const { questionNumber} = useParams()
      const currentQuestion = parseInt(questionNumber, 10) // Convertir en nombre


  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {currentQuestion} 🧮</h2>
      {/* <Link to="client">Questionnaire Client</Link>
      <Link to="freelance">Questionnaire Freelance</Link> */}

      <Link to={`/survey/${precedent(currentQuestion)}`}>Précédent</Link>
      {currentQuestion === 10 ? <Link to="/results">Résultats</Link> : <Link to={`/survey/${suivant(currentQuestion)}`}>Suivant</Link>}

    </div>
  )
}
export default Survey
