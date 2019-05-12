import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  cookList = [{
    "name": "PAITPOOJA",
    "openTime": "11:30 AM",
    "closeTime": "9:00 PM",
    "startsAt": 30,
    "cookName": "Taruna Dinesh Kumar",
    "distance": "1.5 km",
    "estimateTime": "20-25 min",
    "cardImageUrl": "https://www.colive.in/blog/wp-content/uploads/2018/08/18e0794d8ece2b9494f0550af66dbe36.jpg",
    "profileImageUrl": "https://yt3.ggpht.com/a-/AAuE7mDeQ-P7SSh5Qb226CzTnSFdxQJW2Dpn5vajMw=s900-mo-c-c0xffffffff-rj-k-no"
  }, {
    "name": "MCDONALD'S",
    "openTime": "11:00 AM",
    "closeTime": "10:00 PM",
    "startsAt": 35,
    "cookName": "Richard McDonald",
    "distance": "600 m",
    "estimateTime": "15-20 min",
    "cardImageUrl": "https://www.mcdonalds.com/content/dam/usa/documents/mcdelivery/mcdelivery_new11.jpg",
    "profileImageUrl": "https://secure.i.telegraph.co.uk/multimedia/archive/02446/Turner_2446152b.jpg"
  }, {
    "name": "Domino's Pizza",
    "openTime": "11:00 AM",
    "closeTime": "11:30 PM",
    "startsAt": 59,
    "cookName": "Richard E. Allison Jr.",
    "distance": "2.0 km",
    "estimateTime": "25-30 min",
    "cardImageUrl": "https://cache.dominos.com/olo/5_50_2/assets/build/market/US/_es/images/promo/2018-side-carryout-handheld.jpg",
    "profileImageUrl": "https://www.consultancy.uk/illustrations/news/spotlight/1515613130117_Richard-Allison.jpg"
  }];
}
