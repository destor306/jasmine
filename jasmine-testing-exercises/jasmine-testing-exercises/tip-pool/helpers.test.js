describe("helpers test ", function() {
    beforeEach(function () {
      // initialization logic
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();
    });
  
    it('should add tip amount total sumPaymentTotal()', function(){
      expect(sumPaymentTotal('tipAmt')).toEqual(20);

      billAmtInput.value = 200;
      tipAmtInput.value = 40;

      submitPaymentInfo();

      expect(sumPaymentTotal('tipAmt')).toEqual(60);
    })
  
    it('should add total bill sumPaymentTotal()', function(){
        expect(sumPaymentTotal('billAmt')).toEqual(100);

        billAmtInput.value = 200;
        tipAmtInput.value = 40;

        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(300);
      
    })
    it('should sum total tip percent sumPaymentTotal()', function(){
        expect(sumPaymentTotal('tipPercent')).toEqual(20);

        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    
        submitPaymentInfo();
    
        expect(sumPaymentTotal('tipPercent')).toEqual(40);
      
    })

    it('should sum tip percent of a single tip ',function(){
        expect(calculateTipPercent(100,23)).toEqual(23);
        expect(calculateTipPercent(111,11)).toEqual(10);

    })

    it('should add table appendTd(tr, value)',function(){
        let Tr = document.createElement('tr');

        appendTd(Tr, 'jasmine');
        expect(Tr.children.length).toEqual(1);
        expect(Tr.firstChild.innerHTML).toEqual('jasmine');
    })

    it('should delete table appendDeleteBtn(tr)',function(){
      let Tr = document.createElement('tr');

      appendDeleteBtn(Tr);
      expect(Tr.children.length).toEqual(1);
      expect(Tr.firstChild.innerHTML).toEqual('X');
  })

    afterEach(function() {
      // teardown logic
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      allPayments = {};
      paymentId =0;
    });
  });
  