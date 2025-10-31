import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudPageServices {
  public myNameList: string[] = ['Debdip', 'Poorva'];
  myNames$ = new BehaviorSubject<string[]>(this.myNameList);
  duplicateValue: boolean = false;
  //add function
  onAdd(input: string) {
    const updatedList = [...this.myNameList, input];
    this.myNameList = updatedList;
    this.myNames$.next(updatedList);
  }

  //edit function
  onEdit(index: number, newName: string) {
    const updatedList = [...this.myNameList];
    updatedList[index] = newName;
    this.myNameList = updatedList;
    this.myNames$.next(updatedList);
  }

  //delete function
  onDelete(index: number) {
    const updatedList = this.myNameList.filter((_, i) => i !== index);
    this.myNameList = updatedList;
    this.myNames$.next(updatedList);
  }
}
