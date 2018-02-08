import { Directive, Input, ElementRef, Renderer } from '@angular/core';
import { DomController } from 'ionic-angular';
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
  constructor(public element: ElementRef, public renderer: Renderer, public domCtrl: DomController) {
    console.log('Hello AbsoluteDragDirective Directive');
  }
  ngAfterViewInit() {

        this.renderer.setElementStyle(this.element.nativeElement, 'position', 'absolute');
        this.renderer.setElementStyle(this.element.nativeElement, 'left', this.startLeft + 'px');
        this.renderer.setElementStyle(this.element.nativeElement, 'top', this.startTop + 'px');
 		
 		console.log(this.startLeft, this.startTop)
        let hammer = new window['Hammer'](this.element.nativeElement);
        hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });
 
        hammer.on('pan', (ev) => {
          this.handlePan(ev);
        });
 
        this.e = $(this.element.nativeElement);
 		this.toolbarHeight = $('[ion-header]').css('height')
 		this.isHorizontal = $(this.e[0]).is('[absolute-drag-horizontal]');
 		this.isVertical = $(this.e[0]).is('[absolute-drag-vertical]');
    }
 
    handlePan(ev){
 
        let newLeft = ev.center.x;
        let newTop = ev.center.y;
        if(this.reduceRight)
        {
        	newLeft = newLeft - this.reduceRight;
        }
 
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
