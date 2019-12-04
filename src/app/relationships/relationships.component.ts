import { Component, OnInit } from '@angular/core';
import { ProtegeService } from 'src/app/protege.service';
import { IRelationshipType, relationTypes } from '../Interfaces/Data';

interface IAddedOptions {
  mainClass: number;
  secondClass: number;
  role: number;
  relationType: string | any;
}

@Component({
  selector: 'app-relationships',
  templateUrl: './relationships.component.html',
  styleUrls: ['./relationships.component.less']
})

/**
 * @class RelationshipsComponent
 * @description Страница добовления отношений
 * @author Shepel Andrey
 */
export class RelationshipsComponent implements OnInit {
  mainClass: number = null;
  secondClass: number = null;
  role: number = null;
  relationType: string = null;
  relationshipTypes: IRelationshipType[] = relationTypes;

  constructor (public protegeService: ProtegeService) {}

  ngOnInit() {
  }

  /**
   * Обработка клика по кнопке добавления связи
   * @param options Объект опций, реализующий интерфейс IAddedOptions
   */
  public onAddClick(options: IAddedOptions): void {
    this.protegeService.relationships.push({
      id: Date.now(),
      mainClassId: options.mainClass,
      secondaryClassId: options.secondClass,
      roleId: options.role,
      relationship: options.relationType
    });

    this.zeroize();
  }

  /**
   * @method
   * @description Обнулить значение селекторов
   */
  private zeroize(): void {
    this.mainClass = null;
    this.secondClass = null;
    this.role = null;
    this.relationType = null;
  }
}
