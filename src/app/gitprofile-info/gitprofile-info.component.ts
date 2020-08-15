import { Component, OnInit } from '@angular/core';
import { GitFollowersService } from '../services/git-followers.service';

@Component({
  selector: 'gitprofile-info',
  templateUrl: './gitprofile-info.component.html',
  styleUrls: ['./gitprofile-info.component.css']
})
export class GitprofileInfoComponent implements OnInit {

  followers: any = [];
  constructor(private followersService: GitFollowersService) { }

  ngOnInit(): void {
    this.followersService.getFollowers()
      .subscribe( (followers) => {
        console.log(followers);
        this.followers = followers;
      })
  }

}
