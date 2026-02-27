export const articles = [
  {
    id: 1,
    slug: 'check-writer-gnn-2026',
    type: 'Conference Paper',
    year: 2026,
    title: 'Analyzing Check Writer Relationship Networks: Uncovering Circular Fraud Schemes with GNN',
    authors: 'Behşi, Z. et al.',
    conference: 'International Conference on Machine Learning Technologies (ICMLT 2026)',
    location: 'Berlin, Germany',
    status: 'Accepted',
    description:
      'A GNN-based approach to detecting circular fraud by modeling relationship networks among check writers in banking systems.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    abstract:
      'Check writer fraud involving circular schemes poses challenges for rule-based detection. We present a GraphSAGE approach constructing writer graphs through two-layer strategy: similarity-based edges (cosine, threshold 0.45) and co-occurrence temporal patterns. We engineer 44 features integrating transaction aggregations and graph topology. SMOTE-ENN addresses class imbalance (12.5:1). Our multi-task architecture optimizes binary classification and anomaly scoring. On 458,445 transactions and 18,342 writers, we achieve 98.1% AUC, 87.62% F1, 95.12% recall, outperforming traditional methods by 15–20 points. Top-100 precision of 94% enables efficient investigation.',
    ieeeUrl: null,
    researchGateUrl: null,
  },
  {
    id: 2,
    slug: 'retail-fraud-hgnn-2026',
    type: 'Conference Paper',
    year: 2026,
    title: 'Heterogeneous Graph Neural Network-based Fraud Detection in Retail Transactions',
    authors: 'Behşi, Z. et al.',
    conference: 'International Conference on Machine Learning Technologies (ICMLT 2026)',
    location: 'Berlin, Germany',
    status: 'Accepted',
    description:
      'A heterogeneous GNN framework capturing diverse entity relationships in retail transaction data for improved fraud classification.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    abstract:
      'Fraud detection in retail transactions presents significant challenges due to extreme class imbalance, complex relational patterns between customers, products, and stores, and the scarcity of labeled fraudulent examples. Traditional machine learning approaches treating transactions independently fail to exploit structural information in retail networks. We propose a heterogeneous graph neural network approach that models retail transactions as a graph with customer, product, and store nodes connected by six edge types. Our architecture employs GraphSAGE convolutions to propagate information across heterogeneous relationships, leveraging 42 engineered features across six categories including price-based, temporal, behavioral, and anomaly indicators. We evaluate four unsupervised clustering algorithms for fraud labeling, finding that K-Means achieves superior cluster quality with Silhouette score 0.554 and fraud rate 10.19%. On a dataset of 500,000 retail transactions with 0.99% fraud rate, our model achieves 94.43% recall and 96.80% AUC-ROC, with 74% precision in the top-100 highest-risk transactions, enabling efficient resource allocation in production fraud operations.',
    ieeeUrl: null,
    researchGateUrl: null,
  },
  {
    id: 3,
    slug: 'banking-graph-fraud-2025',
    type: 'Conference Paper',
    year: 2025,
    title: 'Graph Theory-Based Fraud Detection in Banking Check Transactions',
    authors: 'Behşi, Z. et al.',
    conference: 'National Software Engineering Symposium (UBMK 2025)',
    location: 'IEEE Xplore',
    status: null,
    description:
      'Applying graph theory to model and detect fraudulent patterns in banking check transaction networks.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800',
    abstract:
      'Traditional banking fraud detection systems rely on rule-based approaches that analyze individual transactions in isolation, failing to capture complex relationship patterns indicative of coordinated fraud schemes such as check-kiting and artificial credit score manipulation. We present a novel similarity-based graph theory approach that constructs weighted networks between check issuers using Jaccard Similarity Index and employs advanced graph analysis to identify suspicious entity clusters without requiring complete transaction relationship data. Our approach combines Jaccard Similarity Index for behavioral pattern analysis (addressing payee information unavailability) with comprehensive graph analysis including centrality measures, community detection, and anomaly identification. Through comprehensive evaluation on real banking data containing 458,399 transactions from 121,647 unique issuers — the largest confirmed dataset in fraud detection literature — we demonstrate the effectiveness of our methodology. Following parameter optimization using grid search methodology (similarity threshold: 0.55, risk percentile: 0.75), our study achieves competitive detection rates with an average F1-score of 0.447 (±0.164) and peak performance reaching an F1-score of 0.557, while providing superior network topology analysis with 0.923 clustering coefficient. The system operates under significant data privacy constraints, lacking personal identification information and complete payee data. Despite these limitations, our approach outperforms traditional methods by leveraging similarity-based indirect relationships, and we project that performance could reach 85–95% levels with complete data access.',
    ieeeUrl: 'https://ieeexplore.ieee.org/document/11207008/authors#authors',
    researchGateUrl:
      'https://www.researchgate.net/publication/396878914_Graph_Theory-Based_Fraud_Detection_in_Banking_Check_Transactions',
  },
  {
    id: 4,
    slug: 'student-success-ml-2025',
    type: 'Conference Paper',
    year: 2025,
    title: 'Predicting Student Success Using Machine Learning and Multidimensional Survey Data',
    authors: 'Behşi, Z. et al.',
    conference: '33rd IEEE Signal Processing and Communications Applications Conference (SIU 2025)',
    location: 'IEEE Xplore',
    status: null,
    description:
      'A machine learning approach to educational outcome prediction using multidimensional survey data.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
    abstract:
      'This study develops a machine learning model integrating survey data and performance metrics to predict student success in the UpSchool education program. Students\' personality traits assessed by DISC analysis, financial management, social, and emotional skills were clustered into "Successful," "Unsuccessful," and "Moderately Successful" groups using K-means clustering. The SMOTE technique addressed data imbalance issues, and algorithms such as Logistic Regression, Random Forest, LightGBM, and AdaBoost were tested. After hyperparameter optimization, AdaBoost and LightGBM achieved the highest predictive performance. Results demonstrated the effectiveness of machine learning models in forecasting student success in educational programs. Future studies are recommended to enhance model performance through expanded datasets and to validate the model\'s applicability across diverse educational contexts.',
    ieeeUrl: 'https://ieeexplore.ieee.org/document/11112134/authors#authors',
    researchGateUrl:
      'https://www.researchgate.net/publication/394917121_Predicting_Student_Success_Using_Machine_Learning_and_Multidimensional_Survey_Data_A_Case_Study_on_an_Educational_Program',
  },
];
