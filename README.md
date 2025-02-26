# OpenAI Node.js Library

The OpenAI Node.js library provides convenient access to the OpenAI API from Node.js applications. Most of the code in this library is generated from our [OpenAPI specification](https://github.com/openai/openai-openapi).

**Important note: this library is meant for server-side usage only, as using it in client-side browser code will expose your secret API key. [See here](https://beta.openai.com/docs/api-reference/authentication) for more details.**

## Installation

```bash
$ npm install openai
```

## Usage

The library needs to be configured with your account's secret key, which is available on the [website](https://beta.openai.com/account/api-keys). We recommend setting it as an environment variable. Here's an example of initializing the library with the API key loaded from an environment variable and creating a completion:

```javascript
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const completion = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Hello world",
});
console.log(completion.data.choices[0].text);
```

Check out the [full API documentation](https://beta.openai.com/docs/api-reference?lang=node.js) for examples of all the available functions.

### Request options

All of the available API request functions additionally contain an optional final parameter where you can pass custom [axios request options](https://axios-http.com/docs/req_config), for example:


```javascript
const completion = await openai.createCompletion(
  {
    model: "text-davinci-003",
    prompt: "Hello world",
  },
  {
    timeout: 1000,
    headers: {
      "Example-Header": "example",
    },
  }
);
```


### OpenAI /answers API  - ```createAnswer```
是一种自然语言处理API，可以根据用户提供的问题和上下文，生成高质量的答案。它使用先进的语言模型来分析问题，并返回最相关的答案。

例如，如果您想要回答一个与历史事件有关的问题，您可以使用OpenAI /answers API。您可以将问题提交给API，然后它会分析您的问题，检索与之相关的文本，并生成最相关的答案。这可以帮助用户更快地获得他们需要的信息，并自动化回答常见问题的过程。

OpenAI /answers API可以应用于多种用途，如语音助手、在线客服、搜索引擎等。它可以大大提高自然语言处理的效率，帮助用户更快地获取所需信息。

### OpenAI /chat/completions  - ```createChatCompletion```
是一个API端点，用于生成聊天式对话的文本完成。通过这个API，用户可以输入一些上下文信息和问题，获取AI模型生成的下一步回答。

调用OpenAI /chat/completions需要提供相应的API密钥和参数设置，例如上下文信息、问题文本、生成的回答长度、温度等。API的输出结果是AI模型生成的下一步回答，这个回答可以是一个完整的句子、一个短语、一个单词等，具体取决于所使用的模型和参数设置。

OpenAI /chat/completions的主要应用场景是在聊天式对话中，为用户提供自然、流畅的回答。这个API可以应用于各种聊天式应用，例如智能客服、聊天机器人、语音助手等。


### OpenAI Classification API - ```createAnswer```
是一种自然语言处理API，可以对文本进行分类。它可以接受输入文本并输出预测文本所属的类别，如情感分类、主题分类、意图分类等。

例如，您可以使用OpenAI Classification API对一组产品评论进行情感分类，以确定它们是积极的、消极的还是中性的。或者您可以使用它来对新闻文章进行主题分类，以确定它们是有关体育、政治、娱乐或其他主题的文章。

OpenAI Classification API的作用是帮助用户更快地处理大量文本数据，并自动标记数据。这可以帮助用户更好地了解他们的数据，并从中提取有用的信息。


### OpenAI /completions API - ```createCompletion```
是一种自然语言处理API，可以根据用户提供的上下文和提示，生成自然语言的文本补全建议。它可以用于各种任务，如文本自动补全、写作辅助、语音转文本等。

例如，如果您正在撰写一篇文章，但是卡住了，不知道下一个要写什么，您可以使用OpenAI /completions API。您可以将之前撰写的文本作为上下文，然后提供一个提示，例如“接下来应该写什么？”API会基于上下文和提示分析可能的文本补全建议，然后返回最相关的结果。

OpenAI /completions API使用了深度学习技术，能够生成高质量、自然、流畅的文本补全建议。它可以大大提高自然语言处理的效率，帮助用户更快地生成所需的文本。

### OpenAI /edits API - ```createEdit```
是一种自然语言处理API，可以帮助用户自动纠正拼写错误和语法错误。它可以将不规范的文本转换为标准的文本，以提高文本的质量和可读性。

例如，如果您正在撰写一份商业计划书，但是在快速写作的过程中可能会出现一些拼写错误和语法错误，这时您可以使用OpenAI /edits API。您可以将文本提交给API，然后API会自动检测和纠正文本中的错误，返回更规范的文本。

OpenAI /edits API使用了先进的自然语言处理技术，能够快速、准确地检测和纠正文本中的错误。它可以大大提高文本的质量和可读性，帮助用户更快地生成高质量的文本。


### OpenAI /embeddings API - ```createEmbedding```
是一种自然语言处理API，可以将文本转换为向量（即嵌入），以便进行文本分类、聚类和相似性比较等任务。它可以将文本转换为高维度的向量空间，使得文本之间的相似度可以通过向量之间的距离或角度来度量。

例如，如果您想要比较两篇文章之间的相似性，您可以使用OpenAI /embeddings API。您可以将这两篇文章作为输入文本，然后API会将它们转换为向量，使得您可以使用向量之间的距离或角度来衡量它们之间的相似度。

OpenAI /embeddings API使用了深度学习技术，能够将文本转换为高维度的向量，并保留文本的语义信息。它可以大大提高自然语言处理的效率，帮助用户更好地理解和利用文本数据。
除了文本相似性比较和聚类之外，OpenAI /embeddings API还可以用于以下任务：

文本分类：将文本转换为向量后，可以使用机器学习算法对文本进行分类，例如情感分析、主题分类等。

语义搜索：将用户提供的查询转换为向量，然后与文本数据集中的向量进行比较，以找到最相关的结果。

推荐系统：使用向量相似度来推荐相关的产品、新闻、文章等。

语言模型训练：使用文本向量作为输入来训练自然语言处理模型，例如文本生成、机器翻译等。

数据可视化：将文本数据转换为二维或三维向量，然后将其可视化，以便于人类理解和分析。

总的来说，OpenAI /embeddings API可以将自然语言处理应用于更多的任务和领域，并为数据分析和人工智能提供更多的工具和资源。


### OpenAI /embeddings API和OpenAI Classification API有什么区别
OpenAI /embeddings API和OpenAI Classification API有一些区别，它们的主要区别在于其应用场景和功能。

OpenAI /embeddings API主要用于将文本转换为向量（即嵌入），以便进行文本分类、聚类和相似性比较等任务。它可以将文本转换为高维度的向量空间，使得文本之间的相似度可以通过向量之间的距离或角度来度量。因此，OpenAI /embeddings API适用于需要对文本进行比较和分类的任务，例如情感分析、主题分类、语义搜索等。

OpenAI Classification API则更适用于一些特定的分类任务，它可以对输入的文本进行分类，并返回对应的类别。例如，如果您需要将一组文本数据分为多个类别，例如垃圾邮件分类、产品分类等，那么您可以使用OpenAI Classification API。OpenAI Classification API的优势在于它可以提供更准确的分类结果，并且可以快速训练和部署模型，适用于需要快速分类的实时应用场景。

因此，尽管这两个API都涉及到文本分类和处理，但是它们的功能和应用场景略有不同。选择使用哪一个API取决于具体的应用场景和需求。


### OpenAI /files API - ```createFile```
是一个文件管理API，它允许用户上传、下载、列出和删除文件。用户可以将文件上传到OpenAI的服务器上，然后在需要时进行下载或删除。此外，用户还可以使用API列出已上传的文件，并获取有关这些文件的元数据信息。

OpenAI /files API是一个通用的文件管理API，可以用于任何需要文件管理的应用场景。例如，如果您需要从您的应用程序上传、存储和处理用户生成的图像、音频、视频等文件，那么您可以使用OpenAI /files API来管理这些文件。

与其他文件管理API相比，OpenAI /files API具有以下优点：

安全性：所有的文件都会被加密存储，并且只有授权的用户才能够访问和下载文件。

可扩展性：OpenAI /files API可以处理大量的文件上传和下载请求，并且可以根据需要扩展。

稳定性：OpenAI /files API使用可靠的云存储服务来存储文件，并提供了强大的错误处理和故障恢复功能。

总的来说，OpenAI /files API可以为开发人员提供一个简单、安全、可扩展的文件管理解决方案，使得他们可以更加专注于业务逻辑的开发。


### OpenAI /images/generations - ```createImage```
是一个图像生成API，它使用人工智能技术生成高质量的图像。该API基于OpenAI的最新研究成果，使用基于GAN（生成对抗网络）的模型来生成图像，具有非常高的真实感和多样性。

使用OpenAI /images/generations API，您可以指定一个文本描述，例如“一只黄色的小狗在草地上玩耍”，然后API将生成一张符合描述的图像。您还可以指定图像的大小、样式和其他属性，以更好地控制生成的图像。

OpenAI /images/generations API可以应用于许多领域，例如游戏、虚拟现实、电影制作、广告等，可以用于生成图像、视频和其他形式的媒体内容。它可以帮助设计师、创意人员、开发人员等快速生成高质量的视觉内容，并且可以大大减少制作媒体内容的时间和成本。

总的来说，OpenAI /images/generations API是一个非常强大的图像生成工具，可以为开发人员、创意人员和设计师提供更多的选择和灵活性，以生成高质量、多样化和个性化的图像。


### OpenAI /images/edits - ```createImageEdit```
是一个图像编辑API，它使用人工智能技术对图像进行编辑。该API基于OpenAI的最新研究成果，使用基于GAN（生成对抗网络）的模型来实现图像编辑，具有非常高的准确性和效果。

使用OpenAI /images/edits API，您可以对图像进行多种编辑操作，例如更改颜色、大小、背景等，也可以进行更高级的操作，例如改变图像的表情、风格、外观等。您可以通过指定一些编辑参数，例如调整亮度、对比度、色调等，来控制编辑的效果。

OpenAI /images/edits API可以应用于许多领域，例如游戏、虚拟现实、电影制作、广告等，可以用于编辑图像、视频和其他形式的媒体内容。它可以帮助设计师、创意人员、开发人员等快速编辑图像，并且可以大大减少制作媒体内容的时间和成本。

总的来说，OpenAI /images/edits API是一个非常强大的图像编辑工具，可以为开发人员、创意人员和设计师提供更多的选择和灵活性，以编辑高质量、多样化和个性化的图像。



### OpenAI /images/variations - ```createImageVariation```
是一个图像多样化API，它使用人工智能技术为图像生成多个变化版本。该API基于OpenAI的最新研究成果，使用基于GAN（生成对抗网络）的模型来实现图像多样化，具有非常高的多样性和可控性。

使用OpenAI /images/variations API，您可以为输入的图像生成多个版本，这些版本可能有不同的风格、外观、颜色等，也可能是同一图像的不同变形。您可以指定生成的版本数量和质量，以及一些参数，例如旋转、缩放、裁剪、亮度、对比度、色调等，来控制多样化的效果。

OpenAI /images/variations API可以应用于许多领域，例如游戏、虚拟现实、电影制作、广告等，可以用于生成多样化的图像、视频和其他形式的媒体内容。它可以帮助设计师、创意人员、开发人员等快速生成多个版本的图像，并且可以大大提高媒体内容的质量和多样性。

总的来说，OpenAI /images/variations API是一个非常有用的图像多样化工具，可以为开发人员、创意人员和设计师提供更多的选择和灵活性，以生成高质量、多样化和个性化的图像。


### OpenAI /images/variations和OpenAI /images/edits的区别是什么
OpenAI /images/variations和OpenAI /images/edits都是OpenAI提供的图像处理API，它们的区别在于它们的功能和应用场景不同。

OpenAI /images/variations是一个图像多样化API，它使用人工智能技术为图像生成多个变化版本。您可以为输入的图像生成多个版本，这些版本可能有不同的风格、外观、颜色等，也可能是同一图像的不同变形。这个API主要用于在多样性方面增强您的图像内容，可以应用于游戏、虚拟现实、电影制作、广告等领域。

OpenAI /images/edits是一个图像编辑API，它使用人工智能技术对图像进行编辑。您可以对图像进行多种编辑操作，例如更改颜色、大小、背景等，也可以进行更高级的操作，例如改变图像的表情、风格、外观等。这个API主要用于在具体的图像上进行针对性的编辑，可以应用于设计师、创意人员、开发人员等快速编辑图像的场景。

因此，OpenAI /images/variations主要用于生成多样的图像版本，而OpenAI /images/edits则主要用于对图像进行具体的编辑。当需要增强图像的多样性时，可以使用OpenAI /images/variations API，当需要对具体的图像进行编辑时，可以使用OpenAI /images/edits API。



### OpenAI /moderations - ```createModeration```
是一个内容过滤和审核API，它使用人工智能技术来检测和屏蔽不良或有害的内容。这个API主要用于保护社交媒体、在线社区、游戏、广告和其他互联网应用免受有害或不适宜的内容的影响，保持良好的用户体验和安全性。

使用OpenAI /moderations API，您可以对文本、图像、音频和视频等各种类型的内容进行检测和屏蔽。该API支持多种不同的检测类型，包括骚扰、仇恨言论、色情内容、暴力内容、政治敏感内容等。您可以根据自己的需求选择适合的检测类型，并可以根据需要进行调整和定制。

OpenAI /moderations API的应用场景非常广泛，例如社交媒体平台、在线论坛、游戏开发、广告和电子商务等领域。通过使用这个API，您可以自动检测和屏蔽不良或有害的内容，减少对人工审核的依赖，提高审核效率和准确性，并保护用户的安全和隐私。

总的来说，OpenAI /moderations是一个非常有用的内容过滤和审核工具，可以帮助您保护您的应用免受不良或有害内容的影响，提高用户体验和安全性。


### OpenAI /engines/{engine_id}/search - ```createSearch```
是一个搜索API，它使用人工智能技术来帮助您在大规模文本数据中查找相关信息。这个API基于OpenAI GPT模型，能够理解自然语言，提供高质量的搜索结果。

使用OpenAI /engines/{engine_id}/search，您可以在文本数据集中搜索关键词或短语，获得与搜索词相关的结果列表。您可以通过设置搜索参数，如排序方式、结果数量、过滤条件等，来调整和定制搜索结果。

OpenAI /engines/{engine_id}/search的应用场景非常广泛，可以应用于搜索引擎、知识库、电子书、新闻媒体、智能客服等领域。通过使用这个API，您可以快速准确地查找相关信息，提高搜索效率和质量，并为用户提供更好的搜索体验。

总的来说，OpenAI /engines/{engine_id}/search是一个非常有用的搜索工具，可以帮助您在大规模文本数据中查找相关信息，并提供高质量的搜索结果。



### OpenAI /audio/transcriptions - ```createTranscription```
是一个音频转录API，它使用人工智能技术来将音频文件转换为文本格式。这个API可以处理各种类型的音频文件，包括语音、歌曲、电台广播等。

使用OpenAI /audio/transcriptions，您可以上传音频文件并获取文本格式的转录结果。该API支持多种语言和口音，可以自动识别并转录多种语言的音频。您还可以选择不同的音频质量和格式，以获得更准确和高质量的转录结果。

OpenAI /audio/transcriptions的应用场景非常广泛，可以应用于语音识别、自然语言处理、语音翻译、语音搜索、语音笔记等领域。通过使用这个API，您可以将音频文件转换为易于阅读和搜索的文本格式，提高工作效率和准确性，并为用户提供更好的语音体验。

总的来说，OpenAI /audio/transcriptions是一个非常有用的音频转录工具，可以帮助您将音频文件转换为文本格式，提高工作效率和准确性，并为用户提供更好的语音体验。


### OpenAI /audio/translations - ```createTranslation```
是一个语音翻译API，它使用人工智能技术来将一种语言的音频翻译成另一种语言的文本或音频格式。这个API可以处理各种类型的语音，包括口语、广播、讲座等。

使用OpenAI /audio/translations，您可以上传一种语言的音频文件并获取另一种语言的翻译结果。该API支持多种语言对之间的翻译，并可以将翻译结果输出为文本格式或音频格式。您还可以选择不同的翻译质量和格式，以获得更准确和高质量的翻译结果。

OpenAI /audio/translations的应用场景非常广泛，可以应用于语音翻译、跨语言交流、教育学习、语音搜索等领域。通过使用这个API，您可以实现语言翻译的自动化处理，提高工作效率和准确性，并为用户提供更好的语言交流体验。

总的来说，OpenAI /audio/translations是一个非常有用的语音翻译工具，可以帮助您将一种语言的音频翻译成另一种语言的文本或音频格式，提高工作效率和准确性，并为用户提供更好的语言交流体验。


### OpenAI /models/{model} - ```deleteModel```
是一个通用的API端点，用于访问OpenAI平台上的各种AI模型。通过这个API，用户可以使用不同的模型来进行各种任务，例如文本生成、语言翻译、对话系统、摘要生成等。

OpenAI平台上的模型覆盖了许多不同的AI任务和技术，包括自然语言处理、计算机视觉、语音处理等。用户可以通过调用不同的模型来进行这些任务，并根据具体的应用场景和需求选择不同的模型。

调用OpenAI /models/{model}需要提供相应的API密钥和参数设置，例如输入数据、模型参数、输出格式等。API的输出结果可以是文本、图像、音频等不同的格式，具体取决于所使用的模型和任务。

总的来说，OpenAI /models/{model}是一个非常通用和灵活的API端点，可以让用户使用OpenAI平台上的各种AI模型，进行各种AI任务，提高工作效率和准确性。



### OpenAI /engines - ```listEngines``` 
是一个API端点，用于管理和操作OpenAI平台上的各种AI引擎。通过这个API，用户可以创建、配置、训练和部署自己的AI引擎，或者使用OpenAI平台上的预训练模型进行各种AI任务。

OpenAI平台上的引擎涵盖了许多不同的AI任务和技术，包括自然语言处理、计算机视觉、语音处理等。用户可以通过OpenAI /engines API来管理这些引擎，并进行不同的操作，例如创建新的引擎、修改引擎配置、训练引擎、部署引擎等。

调用OpenAI /engines需要提供相应的API密钥和参数设置，例如引擎名称、引擎配置、训练数据、输出格式等。API的输出结果可以是引擎的状态、训练进度、预测结果等不同的信息，具体取决于所使用的引擎和任务。

总的来说，OpenAI /engines是一个非常强大和灵活的API端点，可以让用户自由地管理和操作OpenAI平台上的各种AI引擎，进行各种AI任务，提高工作效率和准确性。