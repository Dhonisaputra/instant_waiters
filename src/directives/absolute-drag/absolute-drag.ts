import { Directive, Input, ElementRef, Renderer } from '@angular/core';
import { DomController } from 'ionic-angular';
import { HelperProvider } from '../../providers/helper/helper';
import * as $ from "jquery"

/**
 * Generated class for the AbsoluteDragDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[absolute-drag]' // Attribute selector
})
export class AbsoluteDragDirective {
	@Input('startLeft') startLeft: any;
    @Input('startTop') startTop: any;
    @Input('reduceBottom') reduceBottom: any;
    @Input('reduceRight') reduceRight: any;
    e:any;
    toolbarHeight:any;
    isHorizontal:any;
    isVertical:any;
  constructor(public element: ElementRef, public renderer: Renderer, public domCtrl: DomController, public helper: HelperProvider) {
    console.log('Hello AbsoluteDragDirective Directive');
  }
  ngAfterViewInit() {
      if(!this.helper.local.get_params('configure_table'))
      {
          return false;
      }
        let position = this.helper.$(this.element.nativeElement).offset();
        let w = this.helper.$(this.element.nativeElement).css('width');
        let h = this.helper.$(this.element.nativeElement).css('height');
        this.renderer.setElementStyle(this.element.nativeElement, 'position', 'absolute');
        this.renderer.setElementStyle(this.element.nativeElement, 'left', this.startLeft + 'px');
        this.renderer.setElementStyle(this.element.nativeElement, 'top', this.startTop + 'px');
 		
        let hammer = new window['Hammer'](this.element.nativeElement);
        hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });
 
        hammer.on('pan', (ev) => {
            console.log(ev)
          this.handlePan(ev);
        });
 
        this.e = $(this.element.nativeElement);
 		this.toolbarHeight = $('[ion-header]').css('height')
 		this.isHorizontal = $(this.e[0]).is('[absolute-drag-horizontal]');
 		this.isVertical = $(this.e[0]).is('[absolute-drag-vertical]');
    }
 
    handlePan(ev){
        let w = this.helper.IDRtoInt(this.helper.$(this.element.nativeElement).css('width'));
        let h = this.helper.IDRtoInt(this.helper.$(this.element.nativeElement).css('height'));
        let widthBody = this.helper.IDRtoInt(this.helper.$('body').css('width'));

        let position = this.helper.$(this.element.nativeElement).offset();
        let newLeft = ev.center.x - ev.target.parentElement.getBoundingClientRect().left - (w/2);
        let newTop =  ev.center.y - ev.target.parentElement.getBoundingClientRect().top + h;

        newLeft = newLeft + w >= widthBody ? widthBody - w : newLeft;
        newLeft = newLeft < 0 ? 0 : newLeft;
        /*if(this.reduceRight)
        {
            newLeft = newLeft - this.reduceRight;
        }

        if(this.reduceBottom)
        {
        	newTop = newTop - this.reduceBottom;
        }*/
 
        this.domCtrl.write(() => {
        	if(this.isHorizontal || (!this.isHorizontal && !this.isVertical) )
        	{
            	this.renderer.setElementStyle(this.element.nativeElement, 'left', newLeft + 'px');
        	}
        	if(this.isVertical || (!this.isHorizontal && !this.isVertical) )
        	{
            	this.renderer.setElementStyle(this.element.nativeElement, 'top', newTop + 'px');
        	}
        });
 
    }
}
