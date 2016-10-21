// Imports
import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service'
import { Observable } from 'rxjs/Observable';
import { Pet } from '../pet';

@Component({
  template: `
    <h2>Table</h2>
    <table class="table table-yuk2 toggle-arrow-tiny default footable-loaded footable" id="footable_demo" data-filter="#textFilter" data-page-size="5">
            <thead>
                <tr>
                    <th data-toggle="true" class="footable-visible footable-first-column">First Name</th>
                    <th class="footable-visible"> Last Name</th>
                    <th data-hide="phone,tablet" class="footable-visible">Job Title</th>
                    <th data-hide="phone,tablet" data-name="Date Of Birth" class="footable-visible"> DOB</th>
                    <th data-hide="phone" class="footable-visible footable-last-column"> Status</th>
                </tr>
            </thead>
            <tbody>
                <tr style="display: table-row;">
                    <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Isidra</td>
                    <td class="footable-visible"><a href="#">Boudreaux</a></td>
                    <td class="footable-visible">Traffic Court Referee</td>
                    <td data-value="78025368997" class="footable-visible">22 Jun 1972</td>
                    <td data-value="1" class="footable-visible footable-last-column"><span class="label label-success status-active" title="Active">Active</span></td>
                </tr>
                <tr style="display: table-row;">
                    <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Shona</td>
                    <td class="footable-visible">Woldt</td>
                    <td class="footable-visible"><a href="#">Airline Transport Pilot</a></td>
                    <td data-value="370961043292" class="footable-visible">3 Oct 1981</td>
                    <td data-value="2" class="footable-visible footable-last-column"><span class="label label-default status-disabled" title="Disabled">Disabled</span></td>
                </tr>
                <tr style="display: table-row;">
                    <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Granville</td>
                    <td class="footable-visible">Leonardo</td>
                    <td class="footable-visible">Business Services Sales Representative</td>
                    <td data-value="-22133780420" class="footable-visible">19 Apr 1969</td>
                    <td data-value="3" class="footable-visible footable-last-column"><span class="label label-warning status-suspended" title="Suspended">Suspended</span>
                    </td>
                </tr>
                <tr style="display: table-row;">
                    <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Easer</td>
                    <td class="footable-visible">Dragoo</td>
                    <td class="footable-visible">Drywall Stripper</td>
                    <td data-value="250833505574" class="footable-visible">13 Dec 1977</td>
                    <td data-value="1" class="footable-visible footable-last-column"><span class="label label-success status-active" title="Active">Active</span></td>
                </tr>
                <tr style="display: table-row;">
                    <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Maple</td>
                    <td class="footable-visible">Halladay</td>
                    <td class="footable-visible">Aviation Tactical Readiness Officer</td>
                    <td data-value="694116650726" class="footable-visible">30 Dec 1991</td>
                    <td data-value="3" class="footable-visible footable-last-column"><span class="label label-warning status-suspended" title="Suspended">Suspended</span>
                    </td>
                </tr>
                <tr style="display: none;">
                    <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Maxine</td>
                    <td class="footable-visible"><a href="#">Woldt</a></td>
                    <td class="footable-visible"><a href="#">Business Services Sales Representative</a></td>
                    <td data-value="561440464855" class="footable-visible">17 Oct 1987</td>
                    <td data-value="2" class="footable-visible footable-last-column"><span class="label label-default status-disabled" title="Disabled">Disabled</span></td>
                </tr>
                <tr style="display: none;">
                    <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Lorraine</td>
                    <td class="footable-visible">Mcgaughy</td>
                    <td class="footable-visible">Hemodialysis Technician</td>
                    <td data-value="437400551390" class="footable-visible">11 Nov 1983</td>
                    <td data-value="2" class="footable-visible footable-last-column"><span class="label label-default status-disabled" title="Disabled">Disabled</span></td>
                </tr>
                <tr style="display: none;">
                    <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Lizzee</td>
                    <td class="footable-visible"><a href="#">Goodlow</a></td>
                    <td class="footable-visible">Technical Services Librarian</td>
                    <td data-value="-257733999319" class="footable-visible">1 Nov 1961</td>
                    <td data-value="3" class="footable-visible footable-last-column"><span class="label label-warning status-suspended" title="Suspended">Suspended</span>
                    </td>
                </tr>
                <tr style="display: none;">
                    <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Judi</td>
                    <td class="footable-visible">Badgett</td>
                    <td class="footable-visible">Electrical Lineworker</td>
                    <td data-value="362134712000" class="footable-visible">23 Jun 1981</td>
                    <td data-value="1" class="footable-visible footable-last-column"><span class="label label-success status-active" title="Active">Active</span></td>
                </tr>
                <tr style="display: none;">
                    <td class="footable-visible footable-first-column"><span class="footable-toggle"></span>Lauri</td>
                    <td class="footable-visible">Hyland</td>
                    <td class="footable-visible">Blackjack Supervisor</td>
                    <td data-value="500874333932" class="footable-visible">15 Nov 1985</td>
                    <td data-value="3" class="footable-visible footable-last-column"><span class="label label-warning status-suspended" title="Suspended">Suspended</span>
                    </td>
                </tr>
            </tbody>
            <tfoot class="hide-if-no-paging">
                <tr>
                    <td colspan="5" class="footable-visible">
                        <ul class="pagination pagination-sm"><li class="footable-page-arrow disabled"><a data-page="first" href="#first">«</a></li><li class="footable-page-arrow disabled"><a data-page="prev" href="#prev">‹</a></li><li class="footable-page active"><a data-page="0" href="#">1</a></li><li class="footable-page"><a data-page="1" href="#">2</a></li><li class="footable-page-arrow"><a data-page="next" href="#next">›</a></li><li class="footable-page-arrow"><a data-page="last" href="#last">»</a></li></ul>
                    </td>
                </tr>
            </tfoot>
        </table>
    `
})
// Component class implementing OnInit
export class DogListComponent implements OnInit {
  // Private property for binding
  dogs: Observable<Pet[]>;
  constructor(private petService: PetService) {

  }

  // Load data ones componet is ready
  ngOnInit() {
    // Pass retreived pets to the property
    this.dogs = this.petService.findPets('dog');
  }
}
