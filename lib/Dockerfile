FROM quay.io/afx-abu/abu-md
RUN git clone https://github.com/PeaseErnest12287/Ernest-1 /root/Ernest-1/
WORKDIR /root/Ernest-1/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
