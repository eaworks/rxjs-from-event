import { fromEvent, Observable } from 'rxjs';

const saveButton = document.querySelector('button#can');
const subscription = fromEvent<MouseEvent>(saveButton, 'click').subscribe(
  (event) => console.log(event.type, event.x, event.y)
);
setTimeout(() => {
  console.log('Unsubscribe');
  subscription.unsubscribe();
}, 5000);
