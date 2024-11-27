import { createElement } from "react";

function App() {

  const todos = ['todo 1', 'todo 2', 'todo 3']

  //jsx olmasaydı bunu şu şekilde yazardık
  const ul = createElement('ul', null, todos.map(todo=> createElement('li', null, todo)))
  //daha sonra main içine ul'yi yazardık
  // const h1 = createElement('h1', null, 'React For Beginners')
  // return createElement('main',{
  //   className:'test',
  //   id:'main'}, h1
  // )

  
  return(
    <main>
      <ul>
        {todos.map(todo =>(

          <li>
            {todo}
          </li>
        )
        )}
      </ul>
    </main>
  )
  
}

export default App;
