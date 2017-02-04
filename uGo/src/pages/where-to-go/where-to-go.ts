import { Component } from '@angular/core';

import { ModalController, NavController } from 'ionic-angular';
import { PlaceDetailsPage } from '../place-details/place-details';
import { CategoriesModalPage } from '../categories-modal/categories-modal';

@Component({
  selector: 'page-where-to-go',
  templateUrl: 'where-to-go.html'
})
export class WhereToGoPage {

  category = '';
  seachResults = [
    {
      title: 'Bangkok',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Korat',
      description: 'Sed volutpat posuere ante, a viverra mi faucibus in.'
    },
    {
      title: 'asdsads',
      description: 'Cras facilisis lacinia dignissim. Nunc tempor purus dignissim lacus tincidunt ultrices.'
    }
  ];
  features = [
    {
      title: 'aaaa',
      description: 'asdasdasdsao'
    },
    {
      title: 'bbb',
      description: 'test'
    },
    {
      title: 'ccc',
      description: 'kosate'
    },
    {
      title: 'dddd',
      description: 'kosako'
    },
    {
      title: 'eee',
      description: 'ksasas'
    },
    {
      title: 'fff',
      description: 'kosate'
    }
  ];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  searchInput(evt) {
    console.log(evt.target.value);
  }

  openPlaceDetails(item) {
    this.navCtrl.push(PlaceDetailsPage, { item: item });
  }

  changeCategory(cat) {
    this.category = cat;
  }

  viewCategories() {
    let modal = this.modalCtrl.create(CategoriesModalPage, {
      changeCategory: this.changeCategory.bind(this)
    });
    modal.present();
  }

}
