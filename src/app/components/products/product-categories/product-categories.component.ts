import { Component, OnInit } from '@angular/core';
import { faFolder, faFolderOpen, faSquare, faCheckSquare, faCheck, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent implements OnInit {

  public faFolder = faFolder;
  public faFolderOpen = faFolderOpen;
  public faSquare = faSquare;
  public faCheckSquare = faCheckSquare;
  public faMinus = faMinus;
  public faCheck = faCheck;
  roots = [
    {
        label: 'Langages de programmation',
        value: 1,
        children: [
            {
                label: 'C++',
                value: 11
            },
            {
                label: 'Angular',
                value: 12
            },
            {
                label: 'C#',
                value: 13,
                children: [
                    {
                        label: 'LinQ',
                        value: 131
                    },
                    {
                        label: 'UWP',
                        value: 132
                    },
                    {
                        label: 'Sharepoint',
                        value: 133
                    },
                    {
                        label: 'WPF',
                        value: 134
                    }
                ]
            },
            {
                label: 'Java',
                value: 14,
                children: [
                    {
                        label: 'J2E',
                        value: 141
                    },
                    {
                        label: 'Spring Framework',
                        value: 142
                    },
                    {
                        label: 'Vanilla Java',
                        value: 143
                    },
                    {
                        label: 'Android',
                        value: 144
                    }
                ]
            },
            {
                label: 'Empty folder test',
                value: 15,
                children: []
            }
        ]
    }, {
        value: 1111,
        label: 'Customers',
        children: [
            {
                label: 'Norton',
                value: 156
            },
            {
                label: 'Symantec',
                value: 116
            },
            {
                label: 'Some company',
                value: 126
            },
            {
                label: 'Zokelion',
                value: 196
            }
        ]
    }
];
  constructor() { }

  ngOnInit(): void {
  }

  defaultStyleLeafClickedEventHandler(event:any){
    console.log('Click');
    console.log(event);
  }

}
