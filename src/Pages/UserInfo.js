import React, { Component } from 'react';
 
import {
    ListView,
    Platform,
    Slider,
    StyleSheet,
    TouchableWithoutFeedback,
    View, 
    Text, 
    Image, 
    Linking,
    Modal,
    ScrollView,
    Alert
  } from 'react-native';
import { connect } from 'react-redux';


import CardSection from './../components/CardSection/index';
import CardSectionInput from './../components/CardSectionInput/index';
import Card from './../components/Card/index';
import Input from './../components/Input/index';
import Button from './../components/Button/index';
import Header from './../components/Header';
//import { emailChanged, passwordChanged, loginUser } from '../actions';
import Spinner from './../components/Spinner/index';
import { StackNavigator } from 'react-navigation';

import * as Progress from 'react-native-progress';
import * as Animatable from 'react-native-animatable';


import * as Data from '../actions';
import Picker from 'react-native-picker';

import { bindActionCreators } from 'redux';

import Routes from './../config/routes';

//import codePush from "react-native-code-push";
import { AppNavigator } from './../config/routes';
import { NavigationActions } from 'react-navigation';
import Tabs from 'react-native-tabs';
import BottomTab from './bottomTab';

let likes = 300;
let comments = 200;
let photos = 100;
let score = 60;
let averageLikes = 200;
let averageComments = 400;
let averagePhotos = 40;
let likesPercent = 86.33;
let commentPercent = 823.33;
let photosPercent = 81111.33;
let pointsComments = 3;
let pointsPhotos = 2;
let pointsLikes = 4;
let averageFriends = 340;
let friends = 200;
let pointFriends = 1;
let averageUsercomments = 340;
let user_comments = 200;
let pointUserComments = 1;
let friendsPercen = 56.55;
let photosPerc = 87.434;
let userCommentsPerfect = 23.434;
let numberofPoints = 1900;

let questionsText = "This data was obtained from the following journal: ";
let urlJournal = "https://epjdatascience.springeropen.com/articles/10.1140/epjds/s13688-017-0110-z";
let colorOfBar = "green"
var progress = numberofPoints/2000;
var newProgress = progress;
console.log("ProgressNew", seconds);
for (i = 0; i < seconds; i++) { 
    var seconds = new Date().getTime() / 1000;
    newProgress = i;
    
}

const ANIMATION_TYPES = {
    'Fading Entrances': [
      'fadeIn',
      'fadeInDown',
      'fadeInDownBig',
      'fadeInUp',
      'fadeInUpBig',
      'fadeInLeft',
      'fadeInLeftBig',
      'fadeInRight',
      'fadeInRightBig',
    ],
  };
  
var delaySeconds = 800;

class UserInfo extends Component {

    constructor(props){
        super(props);
        this.state = {
            page:'second',
            modalLikes: false,
            modalComments: false,
            modalPhotos: false,
            progress: 0,
            indeterminate: true,
            modalQuestions: false,
            reccomendation: true,
            modalFriends: false,
            modalUserComments: false,

        };
      }
      componentDidMount() {
          
        this.animate();
        if (newProgress > 1300){
            colorOfBar = "yellow"
        }
        else if (numberofPoints > 1675) {
            colorOfBar = "red"
        }
         
        if (numberofPoints > 1675) {
            Alert.alert(
                "We think you might need help!",
                "Can we take you to some resources?",
                //onPress: this.onSubmitPress.bind(this)
                [
                  {
                    text: "Yes",
                    onPress: () => {
                      this.props.navigation.navigate("GetHelp");
                    }
                  },
                  { text: "Cancel" }
                ]
              );
        
      }
    }

    
      setModalVisible(modal, visible) {
        console.log("Modal VIsible", modal)
          if (modal == "likes") {
            console.log("Modal VIsible for likes", visible)
            this.setState({modalLikes: visible});
          }
          else if (modal == "comments") {
            console.log("Modal VIsible for comments", visible)
            this.setState({modalComments: visible});
          }
          else if (modal == "photos") {
            console.log("Modal VIsible for photos", visible)
            this.setState({modalPhotos: visible});
        }
        else if (modal == "questions") {
            console.log("Modal VIsible for Questions", visible)
            this.setState({modalQuestions: visible});
        }
        else if (modal == "friends") {
            console.log("Modal VIsible for friends", visible)
            this.setState({modalQuestions: visible});
        }
        else if (modal == "user_comments") {
            console.log("Modal VIsible for usercomments", visible)
            this.setState({modalQuestions: visible});
        }
        
      }

      animate() {
        let progress = 0;
        this.setState({ progress });
        setTimeout(() => {
          this.setState({ indeterminate: false });
          setInterval(() => {
            progress += Math.random() / 3;
            if (progress > newProgress) {
              progress = newProgress;
            }
            this.setState({ progress });
          }, 500);
        }, 0);
      }

    render() {

        console.log("Props in UserInfo", this.props);
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#DFD4B8'}} >
                <View style={styles.progressView}>
                <Text style={styles.usernameText}> FatOldGuy </Text>
                <Progress.Pie 
                progress={this.state.progress}
                indeterminate={this.state.indeterminate} 
                size={200} 
                color={colorOfBar}/>
               <Text style={styles.pointsText}> {numberofPoints}/2000 Points </Text>
                </View>
                
                  
                        {/* <Text style={styles.text}>  </Text> */}
                        <Animatable.Text 
                            animation="bounceIn" 
                            style={styles.text}
                            delay={delaySeconds}
                            onPress={() => this.setModalVisible("likes",!this.state.modalLikes)}
                        >
                        Your Number of Likes: {likes} 
                        
                        </Animatable.Text>

                        <Animatable.Text 
                            animation="bounceIn" 
                            style={styles.textSecond}
                            delay={delaySeconds}
                            onPress={() => this.setModalVisible("likes",!this.state.modalLikes)}
                        >
                        This means you are in the {likesPercent}th percentile
                        </Animatable.Text>

                        <Animatable.View
                            animation="bounceIn" 
                            style={styles.graph}
                            delay={delaySeconds}
                            > 
                        <Text style={styles.textBar}> Yours </Text>
                        <Progress.Bar progress={likes/1000} width={200} color={"red"} />
                        <Text style={styles.textBar}> Average </Text>
                        <Progress.Bar progress={averageLikes/1000} width={200} />
                        <Text style={styles.pointsAddition}> +{pointsLikes} Points </Text>
                        </Animatable.View>

                        <Animatable.Text 
                            animation="bounceIn" 
                            style={styles.text}
                            delay={delaySeconds+200}
                            onPress={() => this.setModalVisible("comments",!this.state.modalcomments)}
                        >
                        Your Number of Comments: {comments}
                        </Animatable.Text>

                        <Animatable.Text 
                            animation="bounceIn" 
                            style={styles.textSecond}
                            delay={delaySeconds+200}
                            onPress={() => this.setModalVisible("comments",!this.state.modalcomments)}
                        >
                        This means you are in the {commentPercent}th percentile
                        </Animatable.Text>


                        <Animatable.View
                            animation="bounceIn" 
                            style={styles.graph}
                            delay={delaySeconds+200}
                            > 
                        <Text style={styles.textBar}> Yours </Text>
                        <Progress.Bar progress={comments/1000} width={200} color={"red"} />
                        <Text style={styles.textBar}> Average </Text>
                        <Progress.Bar progress={averageComments/1000} width={200} />
                        <Text style={styles.pointsAddition}> +{pointsComments } Points </Text>
                        </Animatable.View>



                        <Animatable.Text 
                            animation="bounceIn" 
                            style={styles.text}
                            delay={delaySeconds+400}
                            onPress={() => this.setModalVisible("photos",!this.state.modalPhotos)}
                        >
                        Your Number of Photos: {photos}
                        </Animatable.Text>

                        <Animatable.Text 
                            animation="bounceIn" 
                            style={styles.textSecond}
                            delay={delaySeconds+400}
                            onPress={() => this.setModalVisible("photos",!this.state.modalPhotos)}
                        >
                        This means you are in the {photosPercent}th percentile
                        </Animatable.Text>
                        


                        <Animatable.View
                            animation="bounceIn" 
                            style={styles.graph}
                            delay={delaySeconds+200}
                            > 
                        <Text style={styles.textBar}> Yours </Text>
                        <Progress.Bar progress={photos/1000} width={200} color={"red"} />
                        <Text style={styles.textBar}> Average </Text>
                        <Progress.Bar progress={averagePhotos/1000} width={200} />
                        <Text style={styles.pointsAddition}> +{pointsPhotos } Points </Text>
                        </Animatable.View>


                        {/* Friends */}

                        <Animatable.Text 
                            animation="bounceIn" 
                            style={styles.text}
                            delay={delaySeconds+600}
                            onPress={() => this.setModalVisible("friends",!this.state.modalFriends)}
                        >
                        Your Number of Friends: {friends}
                        </Animatable.Text>

                        <Animatable.Text 
                            animation="bounceIn" 
                            style={styles.textSecond}
                            delay={delaySeconds+600}
                            onPress={() => this.setModalVisible("friends",!this.state.modalFriends)}
                        >
                        This means you are in the {friendsPercen}th percentile
                        </Animatable.Text>
                        


                        <Animatable.View
                            animation="bounceIn" 
                            style={styles.graph}
                            delay={delaySeconds+200}
                            > 
                        <Text style={styles.textBar}> Yours </Text>
                        <Progress.Bar progress={friends/1000} width={200} color={"red"} />
                        <Text style={styles.textBar}> Average </Text>
                        <Progress.Bar progress={averageFriends/1000} width={200} />
                        <Text style={styles.pointsAddition}> +{pointFriends } Points </Text>
                        </Animatable.View>

                        {/* user_comments */}

                        <Animatable.Text 
                            animation="bounceIn" 
                            style={styles.text}
                            delay={delaySeconds+800}
                            onPress={() => this.setModalVisible("user_comments",!this.state.modalUserComments)}
                        >
                        Your Number of User Comments: {user_comments}
                        </Animatable.Text>

                        <Animatable.Text 
                            animation="bounceIn" 
                            style={styles.textSecond}
                            delay={delaySeconds+800}
                            onPress={() => this.setModalVisible("user_comments",!this.state.modalUserComm)}
                        >
                        This means you are in the {userCommentsPerfect}th percentile
                        </Animatable.Text>
                        


                        <Animatable.View
                            animation="bounceIn" 
                            style={styles.graph}
                            delay={delaySeconds+800}
                            > 
                        <Text style={styles.textBar}> Yours </Text>
                        <Progress.Bar progress={user_comments/1000} width={200} color={"red"} />
                        <Text style={styles.textBar}> Average </Text>
                        <Progress.Bar progress={averageUsercomments/1000} width={200} />
                        <Text style={styles.pointsAddition}> +{pointUserComments } Points </Text>
                        </Animatable.View>


                    
                        <Text style={styles.questions} onPress={() => this.setModalVisible("questions",!this.state.modalQuestions) }> Questions?  </Text>
                {/* <Tabs selected={this.state.page} style={{backgroundColor:'white'}}
                selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>
                    <Text name="first">Your Info</Text>
                    <Text name="second" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Resources</Text>
                    <Text name="third">Info</Text>
                    
                </Tabs> */}
                <Animatable.View 
                            animation="bounceIn" 
                            //style={styles.text}
                            delay={1000}
                            onPress={() => this.setModalVisible("likes",false)}
                        >
                       
                     
                <View style={styles.modal}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalLikes}
                        onRequestClose={() => {alert("Modal has been closed.")}}
                        
                        
                    >
                    <View style={styles.textViewModal}>
                        <Text
                        onPress={() => this.setModalVisible("likes",false)}
                        > Users that receives less likes than the average user on blog posts may interpret this as negative feedback, contributing to feelings of loneliness and depression.
 </Text>
                    </View>
                    </Modal>
                </View>
                </Animatable.View>

            {/* Comments */}

                <Animatable.View 
                            animation="bounceIn" 
                            //style={styles.text}
                            delay={1000}
                            onPress={() => this.setModalVisible(!this.state.modalComments)}
                        >
                       
                     
                <View style={styles.modal}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalComments}
                        onRequestClose={() => {alert("Modal has been closed.")}}
                        
                        
                    >
                    <View style={styles.textViewModal}>
                        <Text
                        onPress={() => this.setModalVisible("comments",false)}
                        > Users that have more comments than the average user on blog posts tend to receive comments as a means of encouragement and empathy, indicating that the content of the post may have shown depressing thoughts or signs of depression.
</Text>
                    </View>
                    </Modal>
                </View>
                </Animatable.View>
                
                
                 {/* Photos */}
                <Animatable.View 
                            animation="bounceIn" 
                            //style={styles.text}
                            delay={1000}
                            onPress={() => this.setModalVisible(!this.state.modalPhotos)}
                        >
                       
                
                <View style={styles.modal}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalPhotos}
                        onRequestClose={() => {alert("Modal has been closed.")}}
                        
                        
                    >
                    <View style={styles.textViewModal}>
                        <Text
                        onPress={() => this.setModalVisible("photos",false)}
                        > Users that post more often than the average user usually exhibit signs of depression since they may feel the need to gain the attention and approval of others more often.
</Text>
                    </View>
                    </Modal>
                </View>
                </Animatable.View>
            {/* Questions */}
                <Animatable.View 
                            animation="bounceIn" 
                            //style={styles.text}
                            delay={1000}
                            onPress={() => this.setModalVisible(!this.state.modalComments)}
                        >
                       
                     
                <View style={styles.modal}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalQuestions}
                        onRequestClose={() => {alert("Modal has been closed.")}}
                        
                        
                    >
                    <View style={styles.textViewModalQuestions}>
                        <Text
                        onPress={() => this.setModalVisible("questions",!this.state.modalQuestions)}
                        > {questionsText} </Text> 
                        <Text style={{ color: 'darkblue', fontWeight: 'bold'}}onPress={() => Linking.openURL(urlJournal)}>
                        Here </Text>
                        
                    </View>
                    </Modal>
                </View>
                </Animatable.View>

                
                

                
            </ScrollView>
        );
    }
}
const styles = {
    input: { 
         backgroundColor: 'white', 
         borderRadius: 5, 
         borderWidth: 1, 
         alignContent: 'center', 
         padding: 20,
         margin: 10,
         flex: 1,
         //color: 'white',
         
         },
    buttonStyle: {
        flex: 1,
        backgroundColor: 'transparent',
        alignSelf: 'center',
        width: 100,
        borderRadius: 5,
        borderWidth: 1,
        flexDirection: 'column',
        marginBottom: 90,
        textAlign: 'center',
        flexDirection: 'row',


        //height: 20,
    },
    progressView: {
        flexDirection: 'column',
        alignContent: 'center',
        alignSelf: 'center',
        paddingTop: 30,
        backgroundColor: 'transparent',

    },
    textData: {
        paddingTop: 20,
        //color: 'blue',
        flexDirection: 'column'
    },
    text: {
        fontSize: 20,
        backgroundColor: '#C3949C',
        width: 400,
        padding: 10,
        marginTop: 10,
    },
    textSecond: {
        fontSize: 15,
        backgroundColor: '#C3949C',
        width: 400,
        paddingLeft: 20,
        paddingRight: 10,
        paddingBottom: 6,
        color: 'white',
        //marginTop: 10,
    },
    usernameText: {
        fontSize: 29,
        flexDirection: 'row',
        alignSelf: 'center',
        paddingBottom: 10,

    },
    modal: {
        marginTop: 20,
        height: 100,
        backgroundColor: 'transparent',
    },
    textViewModal: {
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 300,
        padding: 30,
        alignSelf: 'center'
    },
    textViewModalQuestions: {
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 300,
        padding: 30,
        alignSelf: 'center'
    },
    graph: {
        flexDirection: 'column',
        alignSelf: 'center',
        padding: 5,
    },
    textBar: {
        fontSize: 18,
    },
    questions: {
        fontSize: 20,
        alignSelf: 'center',
        paddingTop: 20,
    },
    pointsAddition: {
        color: 'red',
        fontSize: 15,
        alignSelf: 'flex-end'
    },
    pointsText: {
        fontSize: 20,
        color: 'black',
        paddingTop: 10,
        alignSelf: 'center',
        paddingBottom: 10,

    }
}

const mapDispatchToProps = dispatch =>
bindActionCreators(
  {
    ...Data
  },
  dispatch
);

const mapStateToProps = (state) => {
    
    return {
        
    };
};

export default connect(mapStateToProps,mapDispatchToProps )(UserInfo);
//export default LoginRedux;