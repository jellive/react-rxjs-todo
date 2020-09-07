import { BehaviorSubject, Observable } from 'rxjs'
import { TodoItem } from '../interfaces/TodoItem'

class TodoServiceController {
  nextId = 3

  // init data.
  TodoInitData: TodoItem[] = [
    {
      id: 1,
      content: 'Learn React',
      isDone: false
    },
    {
      id: 2,
      content: 'Learn Angular',
      isDone: true
    }
  ]

  private _data$ = new BehaviorSubject<TodoItem[]>(this.TodoInitData)

  // 직접 접근을 막기위해 임의의 Observable로 변환함.
  readonly todoData$: Observable<TodoItem[]> = this._data$.asObservable()

  // add Todo Data.
  addTodo(content: string): void {
    this.TodoInitData = this.TodoInitData.concat({
      content,
      id: this.nextId,
      isDone: false
    })
    this._data$.next(this.TodoInitData) // 새로 만든 data를 subject형으로 변환하고, 그 값을 구독하는 모든 Observer들에게 방출한다.
    this.nextId++
  }

  // delete Todo Data.
  delTodo(id: number): void {
    this.TodoInitData = this.TodoInitData.filter((v) => v.id !== id)
    this._data$.next(this.TodoInitData)
  }

  // Toggle Todo Data.
  toggleIsDone(id: number, checked: boolean): void {
    this.TodoInitData = this.TodoInitData.map((v) => ({
      id: v.id,
      content: v.content,
      isDone: v.id === id ? checked : v.isDone
    }))
    this._data$.next(this.TodoInitData)
  }

  dispose(): void {
    this._data$.complete()
  }
}

export const TodoService = new TodoServiceController()
