export class Tax {
}

export class TaxDto {
    public tax_id: number;
    public tax_type: string;
    public tax_ordertypeDelivery: string;
    public tax_ordertypePickup: string;
    public tax_title: string;
    public tax_displayname: string;
    public tax_amount: string;
    public tax_description: string;
}

export class SaveTaxDto{
  public taxTitle: string;
  public displayName: string;
  public taxAmount: string;
  public taxDescription: string;
  public taxType: TaxType;
  public orderType: OrderType;
}

export class TaxType{
    public Id: number;
}

export class OrderType{
    public Id: number;
}

export class TaxModal{
    public tax: SaveTaxDto;
}

// {
// "tax":
// {
// "taxTitle":"taxTitle",
// "displayName":"displayName",
// "taxAmount":123.00,
// "taxDescription":"taxDescription",

// "taxType":{
// 	"id":1
// },
// "orderType":{
// 	"id":1
// }
// }
// }