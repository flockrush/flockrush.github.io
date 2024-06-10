purgecss --css css/app.css --content be-ai-ready/index.html --output be-ai-ready/ && \
purgecss --css css/app.css --content about/index.html --output about/ && \
purgecss --css css/app.css --content lets-talk/index.html --output lets-talk/ && \
purgecss --css css/app.css --content privacy-policy/index.html --output privacy-policy/ && \
purgecss --css css/app.css --content why-choose-flockrush/index.html --output why-choose-flockrush/ && \
purgecss --css css/app.css --content AI-Twins-ALIA/index.html --output AI-Twins-ALIA/ && \
purgecss --css css/app.css --content the-future-of-enterprise-ai/index.html --output the-future-of-enterprise-ai/ && \
purgecss --css css/app.css --content ai-implications-for-business-strategy/index.html --output ai-implications-for-business-strategy/ && \
cleancss -o ai-implications-for-business-strategy/app.min.css ai-implications-for-business-strategy/app.css --source-map && \
cleancss -o be-ai-ready/app.min.css be-ai-ready/app.css --source-map && \
cleancss -o about/app.min.css about/app.css --source-map && \
cleancss -o lets-talk/app.min.css lets-talk/app.css --source-map && \
cleancss -o privacy-policy/app.min.css privacy-policy/app.css --source-map && \
cleancss -o why-choose-flockrush/app.min.css why-choose-flockrush/app.css --source-map && \
cleancss -o AI-Twins-ALIA/app.min.css AI-Twins-ALIA/app.css --source-map && \
cleancss -o the-future-of-enterprise-ai/app.min.css the-future-of-enterprise-ai/app.css --source-map && \
npx terser js/app.js -o js/app.min.js --compress --mangle
