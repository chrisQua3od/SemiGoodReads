import { Component, OnInit } from '@angular/core';
import { AdminPanelService } from '../admin-panel.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
  providers: [AdminPanelService]
})
export class AdminPanelComponent implements OnInit {

  constructor(private amdinPanelService: AdminPanelService) { }

  ngOnInit(): void {
  }

}
