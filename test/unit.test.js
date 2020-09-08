const request = require('supertest');
const express = require('express');
const app = require('../src/app');


test('Should fetch one url ', async () => {
  await request(app)
        .get('/getTimes')
        .send({
            url:"http://www.amazon.com/"
        })
        .expect(200)
})



test('Should fetch two url ', async () => {
    await request(app)
          .get('/getTimes')
          .send({
              url:"http://www.times.com/"
          })
          .expect(200)
  })
  
test('Should fetch three url', async () => {
    await request(app)
          .get('/getTimes')
          .send({
              url:"http://www.amazon.com/Apple-iPhone-16gb-Space-Unlocked/dp/B00NQGP42Y/"
          })
          .expect(200)
  })