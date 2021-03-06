# 实验
# 数据集
我们在两个数据集上评估了我们的方法: Weibo和Semeval数据集。虽然中国举办了很多微博评论分析的比赛，并且制作了许多高质量的数据集，比如NLPCC2013和2014。不幸的是，大多数数据集仅分析句子级别的情感倾向。为了进行细粒度的情感分析，我们通过网络爬虫的方式来构造数据集。我们规定目标可以是出现在Weibo评论中的实体，也可以是微博中的抽象实体。我们把目标的情感极性分为消极，中性和积极。如果目标在三个情感极性上存在分歧，我们将忽略该目标实体。我们爬取的主要是餐饮领域的数据，这个数据包含4个方面的内容：交通，服务，价格和环境。然后，我们随机选择18480条微博评论(总共22821条Weibo评论)作为训练集，其余的4341个评论作为测试集。为了防止实验过度拟合，我们将数据的每个情感极性的条目设置为相同。表A详细描述了微博数据集，并且其中到的每条微博评论的长度都超过200个字符。为了展示我们方法的通用性，我们还对开源数据集Semeval进行了实验。我们分别使用了三个子数据集Semeval-2014-task4,Semeval-2015-task12和Semeval-2016-task5。每个数据集都包含两个领域分别是饭店和笔记本。我们将数据中出现的"方面"和"类别"设置为目标，然后根据目标执行ABSA实验。表B就是我们数据集的详细信息。
为了纠正平均目标向量这个缺点，我们把目标构造为为一个情感问句的形式，比如"What is the emotional tendency of the target in the text?"。

## 评估
我们使用宽松和严格的指标来评估我们的方法和基准模型。我们的多标签的分类器的度量方式使用的是：Macro-F1,Micro-F1和正确率。给定一个数据集D, 目标t$\in$D的真实的类别表示为Y，而预测之后的类别用y表示。那么这个三个指标可以使用如下公式表示：
* 正确率表示: 
* Macro-F1的表示:
* Micro-F1的表示:


## 参数设置
我们使用腾讯AI Lab Embedding为Weibo数据集中的上下文和目标到的单词分别分配了200维向量。而Semeval数据集使用glove作为数据集的词嵌入矩阵，其中每个单词都分配了300维的向量。对于这两个数据集中的所有不包含在词嵌入矩阵中的单词，我们遵循U(-0.01, 0.01)的正态分布的方式来随机分配一组向量。为了防止数据过拟合，我们将丢失率设置为0.1。我们模型的优化器是Adam,它的batch-size和学习率分别为8和6.25e-5。我们使用jieba进行汉语短语的分词，然后生成词向量矩阵。注意：即使我们设置了实验种子，实验结果也会随着每个随机分配的单词向量发生变化。为了解决这个问题，我们对10次实验的结果求平均。

## 实验设置
为了测试模型的性能，我们执行了以下一组实验：T + LSTM，T + Att + LSTM，SQ + Att + LSTM，T + Att + TF，SQ + Att + TF，SQ + MM + TF， IAN，RAN。
首先，我们检查情绪问题是否会影响实验。 我们已经基于T + LSTM进行了一些实验，即T + Att + LSTM和SQ + Att + LSTM。

其次，我们用Transformer模块替换了LSTM，在其中我们将目标和注释作为输入。 然后，比较Transformer和LSTM的实验结果, 用来判断Transformer是否在会丢失关键的情感信息。

然后，我们使用Transformer模块将内存网络模块添加到模型中。 通过先前的比较实验判断，添加的存储网络模块是否可以减少不必要的情感词的影响。

最后，我们有加入了IAN和RAN进行对比，与其他论文的模型进行比较，来突出我们模型的实验效果。

## 模型比较
我们将我们提出的方法与针对ABSA提出的方法以及适用于ABSA的方法进行了比较。此外，我们还比较我们提出方法的几种的变体的性能，来突出我们的实验性能。我们多次运行该模型，并选取了实验效果最好的一些实验数据。接下来是我们比较的几个模型的介绍：
T+LSTM采用了Bi-LSTM编码句子的上下文信息，并在句子隐藏层的输出上嵌入了平均目标的向量，然后对这个嵌入后的句子向量进行情感极性的分类；
T+Att+LSTM在LSTM的隐藏层的输出上使用了注意力机制，把权重集中在了影响句子情感倾向的单词上；
SQ+Att+LSTM把目标转化为情感问句的形式，然后使用注意力机制把句子的权重集中在句子的情感词上；
T+Att+TF使用Transformer对句子进行上下文编码，然后在Transformer的输出上使用注意力机制把句子权重集中到与目标相关的单词上；SQ+Att+TF同时使用了情感问句和Transformer；
SQ+TF+MN除了使用情感问句和transformer模型之外，还使用记忆网络来过滤无关情感词影响；
IAN使用两个LSTM网络分别建模句子和目标。 从句子生成的隐藏状态用于通过合并操作来计算目标的注意力得分，反之亦然；
RAN通过对Bi-LSTM的输出而不是单词嵌入施加多跳关注来扩展MemNet。 此外，在多个注意之间应用了递归函数以对内部依赖关系建模。

## 模型结果分析
表A和表B分别显示了微博数据集和Semeval数据集的性能。在与平均目标向量的方法相比，我们可以发现，使用了情感问句的模型在两个数据集上都有了一定的提升。但是在微博数据集上的提升比较小。我们推测原因是微博数据集中的组成目标的词语都是比较常见的词汇，不会造成随机分配到较小到的词向量。在semeval数据集取得的了相对较大的提升，说明了semeval数据集上存在一些不常见的词汇，改成情感问句的形式使得分类提升。

另外，我们对比使用了Transformer和LSTM的模型，我们可以看到在微博数据集上Transformer的效果要好于LSTM的模型。但是，令我们惊讶的是在Semeval上，使用了Transformer模型几乎没有任何的提升。我们详细观察了Semeval的数据集发现，评论的长度大多数几种在20个单词左右，少数超过了50个单词。因此，这就造成了LSTM模型和Transformer模型差不多的假象。

令我们惊喜的是，我们的模型在加入了记忆网络以后实现效果的得到了极大的提升。相比于之前的模型，平均提高了3%，尤其在Semeval2016-task5这个数据集上。但是，在微博数据集上提升效果的是最小的，我们认为这是因为微博数据集的规模比较大，记忆网络需要更多的迭代次数。为了更好实现分类的效果我们为每个数据集的记忆网络设置了不同的迭代次数。

从表A和表B我们也可以看出，TF-MN模型可以提高情感分类的效果。TF-MN模型的实验效果优于IAN和RAN这些神经网络模型。

## 注意力可视化
我们在图A中可视化了semeval2014-task4的一个句子的Transformer模型输出的权重。这条评论是餐馆领域，关于服务态度的情感打分。这条评论同时包含了服务和食物两个方面。这两方面都得到了很高的关注。但是，我们在进行"服务"情感极性判断的时候，只需要关于"服务"的信息。
为此，该模型需要更集中地分配注意权重。 图B显示了我们使用内存网络后注意力权重的分布。 在给“服务”打分时，评论的注意力集中在“服务”方面和周围的形容词上。 因此，记忆网络可以减少无关的情感词和实体的影响，提高情感分类的正确性。

## 记忆网络跳数的优化
为了提高记忆模块提取情绪信息的效率，我们进行了一些实验来优化和调整记忆更新的次数。 我们发现，当更新的跳数设置为5时，模型对微博数据集分类效果最佳，但是在semeval数据中，当更新的条设置为3的时候就已经最佳了。 这些实验组的结果显示在表〜\ ref {hop-compare}中。 我们认为，这是由于过多的更新操作会导致本地关注机制重复对同一文本块进行操作，因此记忆网络模型迭代的次数并不越多越好。


# 结论
我们接下来将研究如何把胶囊网络运用在ABSA上。