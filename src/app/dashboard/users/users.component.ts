import { Component, OnInit } from '@angular/core';
import { ProcessService } from 'src/app/_services/process.service';
import { Users } from 'src/app/_interfaces/users';
import { environment } from 'src/environments/environment';
import DataTable = DataTables;
import 'datatables.net';
import 'datatables.net-rowreorder-dt';
import * as $ from 'jquery';
import { AuthService } from 'src/app/_services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  sort = ['ASC', 'DESC'];
  type = ['_id', 'username'];
  users: Users[];
  filters: object;
  filter: string;
  dataTable: any;
  queryUser = '';
  queryType = '';
  querySort = '';
  querySortField = '';

  constructor(private process: ProcessService, private auth: AuthService, private toaster: ToastrService) {}

  ngOnInit() {
    this.getUser();
  }

  initTable(that) {
    $(document).ready(() => {
      const columnDefs = [
        {
          targets: 0,
          searchable: false,
          orderable: false,

          checkboxes: {
            selectRow: false,
            selectAllPages: false,
            buttons: ['print']
          }
        },
        {
          targets: 1,
          searchable: false,
          orderable: true
        },
        {
          targets: 2,
          searchable: false,
          orderable: false
        }
      ];
      const language = {
        lengthMenu: 'Mostrar _MENU_ registros por página.',
        search: 'Buscar:',
        infoFiltered: '(Filtrado de un total de _MAX_ registros)',
        paginate: {
          first: 'Primero',
          last: 'Ultimo',
          next: 'Siguiente',
          previous: 'Anterior'
        },
        info: 'Mostrando _START_ al _END_ de _TOTAL_ registros.',
        infoEmpty: 'Mostrando 0 al 0 de 0 registros.',
        select: {
          rows: 'Seleccionado %d registros'
        },
        emptyTable: 'No existen registros disponibles.'
      };
      const order = [[that.queryType == '_id' ? 0 : 1, that.querySort.toLowerCase()]];

      this.dataTable = $('#tableSolic').DataTable({
        data: this.users,
        processing: true,
        lengthMenu: [
          [5, 10, 25, 50, -1],
          [5, 10, 25, 50, 'Todas']
        ],
        language,
        columns: [
          { data: '_id', visible: false, width: '5%' },
          { data: 'username', title: 'Usuario', visible: true },
          {
            defaultContent:
              '<button type="button" title="Eliminar" class="btn btn-danger"> <span class="glyphicon glyphicon-remove"></span></button>',
            width: '5%'
          }
        ],
        columnDefs,
        order,
        dom: 'Bfrtip'
      });

      $('#tableSolic tbody').on('click', 'button', function() {
        const data: any = that.dataTable.row($(this).parents('tr')).data();
        that.deleteUser(data._id);
      });
    });
  }

  getUser() {
    this.process.getUser(this.querySort, this.queryUser, this.queryType, this.querySortField).subscribe(
      success => {
        this.users = success;

        if (this.dataTable !== undefined) {
          this.dataTable.destroy();
        }
        this.initTable(this);
      },
      no => {
        this.toaster.error(`Intente nuevamente.`, `Error inesperado`);
      }
    );
  }

  deleteUser(id: string) {
    this.process.deleteUsers(id).subscribe(
      success => {
        this.toaster.success(``, `Eliminado Satisfactoriamente.`);
        this.getUser();
      },
      error => {
        this.toaster.success(`Intente nuevamente.`, `Error inesperado`);
      }
    );
  }
}
