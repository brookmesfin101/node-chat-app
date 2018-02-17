var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate corrrect message object', () => {
        var from = 'Jen';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        //from property is correct
        //created at is a number
        //url is correct given lat and long
        var from = 'Brook';
        var lat = 1;
        var lng = 1;
        var url = 'https://www.google.com/maps?q=1,1';
        var locationMessage = generateLocationMessage(from, lat, lng);

        expect(locationMessage.createdAt).toBeA('number');
        expect(locationMessage).toInclude({from, url});
        expect(locationMessage.url).toBe(url);        
    });
});