# Implementation of confirm dialogs !

## Dépendances 
* jquery (js)
* bootstrap (css + js)
* jquery ui (css + js)

### Avant l'exécution du script
Script à inclure dans le header de la page html : 
<script src="path/to/ConfirmDialogModule/confirmdialog-min.js"></script>
Script écrit par le développeur :

```html
<button onclick="alert('ok');" >
    Alert Ok
    <span class="confirm" data-header="Confirmation" data-message="Are you sure?" data-icon="ui-icon-alert">
    </span>
</button>
````

## Fonctionnement 
### Après l'exécution du script
Le code écrit par le développeur est remanié par le script et le code suivant est produit : 
```html
<button class="s_confirm_idt_2" onclick="S.confirm({&quot;src&quot;:&quot;s_confirm_idt_2&quot;,&quot;action&quot;:&quot;alert('ok');&quot;,&quot;header&quot;:&quot;Confirmation&quot;,&quot;message&quot;:&quot;Are you sure?&quot;,&quot;icon&quot;:&quot;ui-icon-alert&quot;}); return false;">
    Alert Ok
</button>
```

### Après un click sur le bouton
Lors du click sur le bouton, le module ajoute le modal de dialogue et l'affiche.
```html
<button class="s_confirm_idt_2" onclick="S.confirm({&quot;src&quot;:&quot;s_confirm_idt_2&quot;,&quot;action&quot;:&quot;alert('ok');&quot;,&quot;header&quot;:&quot;Confirmation&quot;,&quot;message&quot;:&quot;Are you sure?&quot;,&quot;icon&quot;:&quot;ui-icon-alert&quot;}); return false;">
    Alert Ok
</button>
<div class="modal fade in" tabindex="-1" role="dialog" style="display: block;">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span>
                </button>
                <h4 class="modal-title">Confirmation</h4> </div>
            <div class="modal-body">
                <p> <span class="ui-icon ui-icon-alert" style="float: left;"></span> &nbsp;Are you sure? </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default dismiss-btn" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary success-btn" onclick="alert('ok');">Save changes</button>
            </div>
        </div>
    </div>
</div>

<div class="modal-backdrop fade in"></div>
```

