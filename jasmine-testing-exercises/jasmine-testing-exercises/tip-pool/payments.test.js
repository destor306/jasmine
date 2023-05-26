describe("payments test", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value  = 100;
      tipAmtInput.value = 20;
    });
    it('should submitPaymentInfo()',function(){
      submitPaymentInfo();
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment1'].billAmt).toEqual('100');
      expect(allPayments['payment1'].tipAmt).toEqual('20');
      expect(allPayments['payment1'].tipPercent).toEqual(20);

    })

    it('should not submit emtpy info',function(){
      billAmtInput.value = '';
      submitPaymentInfo();

      expect(Object.keys(allPayments).length).toEqual(0);
    })
  
    it('should create createCurPayment()', function(){
      let curPay = createCurPayment();
      
      expect(curPay.billAmt).toEqual('100');
      expect(curPay.tipAmt).toEqual('20');
      expect(curPay.tipPercent).toEqual(20);
    })
  
    it('should append appendPaymentTable())', function(){
      let curPay = createCurPayment();
      allPayments['payment1'] = curPay;
      appendPaymentTable(curPay);

      let curTd = document.querySelectorAll('#paymentTable tbody tr td')
      expect(curTd.length).toEqual(4);
      expect(curTd[0].innerText).toEqual('$100');
      expect(curTd[1].innerText).toEqual('$20');
      expect(curTd[2].innerText).toEqual('20%');
      expect(curTd[3].innerText).toEqual('X');

    })

    afterEach(function() {
      // teardown logic
      billAmtInput.value  = '';
      tipAmtInput.value = '';
      allPayments ={};
      paymentTbody.innerHTML = '';
      paymentId =0;
    });
  });
  