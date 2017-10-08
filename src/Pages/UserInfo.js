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


var MessageBarAlert = require('react-native-message-bar').MessageBar;
var MessageBarManager = require('react-native-message-bar').MessageBarManager;

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

let numberofPoints = 0;
let likes = 0;
let likesPercent = '';
let averageLikes= '';
let questionsText = "This data was obtained from the following journal: ";
let urlJournal = "https://epjdatascience.springeropen.com/articles/10.1140/epjds/s13688-017-0110-z";
let colorOfBar = "green"

let progress = 0;
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
let risk = '';

class UserInfo extends Component {

    constructor(props){
        super(props);
        this.state = {
            page:'second',
            modalBlogTraffic: false,
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
      componentWillMount() {
        //let BlogTraffic = 300;
        let comments = this.props.data.MyComments;
        let photos = this.props.Photos;
        let score = 60;
        let averageLikes = 200;
        let averageComments = 400;
        let averagePhotos = 40;
        //let BlogTraffic = this.props.data.BlogTraffic;
        let commentPercent = 823.33;
        let photosPercent = 81111.33;
        let pointsComments = 3;
        let pointsPhotos = 2;
        let pointsLikes = 4;
        let averageFriends = 340;
        let friends = this.props.data.Friends;
        let pointFriends = this.props.data.Friends_points;
        let averageUsercomments = 340;
        let user_comments = 200;
        let pointUserComments = 1;
        let friendsPercen = this.props.data.Friends_percentile;
        let photosPerc = 87.434;
        let userCommentsPerfect = 23.434;
        let numberofPoints = this.props.data.Total_points;
        
        let progress = numberofPoints/2000;
        //let newProgress = progress;

        
          
      }
      componentDidMount() {

        

        this.animate();
        MessageBarManager.registerMessageBar(this.refs.alert);
        if (this.props.data.Total_points > 1300 && this.props.data.Total_points < 1675){
            colorOfBar = "yellow";
            MessageBarManager.showAlert({
                title: 'You are at a medium risk of Depression',
                message: 'We suggest learning more about this issue and reccomend talking to a loved one about what you might be going through',
                alertType: 'warning',
                duration: 8000,
                // See Properties section for full customization
                // Or check `index.ios.js` or `index.android.js` for a complete example
              });
              risk = "Medium"
        }
        else if (this.props.data.Total_points > 1675 && this.props.data.Total_points < 4000) {
            colorOfBar = "red"
            MessageBarManager.showAlert({
                title: 'You are at a higb risk of Depression',
                message: 'Please find some help and talk inmediatly to a family member, doctor or friend! It always help',
                alertType: 'error',
                duration: 8000,
                // See Properties section for full customization
                // Or check `index.ios.js` or `index.android.js` for a complete example
              });
              risk = "High"
        }
        else {
            MessageBarManager.showAlert({
                title: 'You are at a low risk of Depression',
                message: 'We still suggest talking to your doctor on a regular basis',
                alertType: 'success',
                duration: 8000,
                // See Properties section for full customization
                // Or check `index.ios.js` or `index.android.js` for a complete example
              });
              rish = "Low"
        }
         
        if (this.props.data.Total_points > 1675) {
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

      
      componentWillUnmount() {
        // Remove the alert located on this master page from the manager
        MessageBarManager.unregisterMessageBar();
      }

    
      setModalVisible(modal, visible) {
        console.log("Modal VIsible", modal)
          if (modal == "blogTraffic") {
            console.log("Modal VIsible for blogtraffic", visible)
            this.setState({modalBlogTraffic: visible});
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
            this.setState({modalFriends: visible});
        }
        else if (modal == "userComments") {
            console.log("Modal VIsible for usercomments", visible)
            this.setState({modalUserComments: visible});
        }
        
      }

      animate() {
        
        let maximum = this.props.data.Total_points/2000;
        this.setState({ progress });
        setTimeout(() => {
          this.setState({ indeterminate: false });
          var refreshId = setInterval(() => {
            progress += Math.random() / 5;
            if (progress > maximum) {
              progress = maximum;
              console.log("Inside IF")
              clearInterval(refreshId);
              return 0;
            }
            this.setState({ progress: maximum });
            console.log("After set max");
          }, 500);
        }, 500);
        
      }

    render() {

        console.log("Props in UserInfo", this.props);
        const { navigate } = this.props.navigation;
        return (
             <ScrollView style={{ flex: 1, backgroundColor: '#DFD4B8'}} >
             
                <View style={styles.progressView}>
                <Text style={styles.usernameText}> {this.props.data.Name} </Text>
                <View style={{backgroundColor: 'transparent', alignSelf: 'center'}}>
                <Progress.Pie 
                progress={this.state.progress}
                indeterminate={this.state.indeterminate} 
                delay={1000}
                size={200} 
                color={colorOfBar}/>
                
                </View>
               <Text style={styles.pointsText}> {this.props.data.Total_points}/2000 Points </Text>
               <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18, paddingTop: 5}}> You are a {risk} risk of Depression </Text>
                </View>
                
                  
                       
                        <Animatable.Text 
                            animation="bounceIn" 
                            style={styles.text}
                            delay={delaySeconds}
                            onPress={() => this.setModalVisible("blogTraffic",!this.state.modalBlogTraffic)}
                        >
                        Your Number of Blog Traffic: {this.props.data.BlogTraffic} 
                        
                        </Animatable.Text>

                        {/* <Animatable.Text 
                            animation="bounceIn" 
                            style={styles.textSecond}
                            delay={delaySeconds}
                            onPress={() => this.setModalVisible("blogTraffic",!this.state.modalBlogTraffic)}
                        >
                        This means you are in the {likesPercent}th percentile
                        </Animatable.Text> */}

                        <Animatable.View
                            animation="bounceIn" 
                            style={styles.graph}
                            delay={delaySeconds}
                            > 
                        <Text style={styles.textBar}> Yours </Text>
                        <Progress.Bar progress={this.props.data.BlogTraffic/10000} width={200} color={"red"} />
                        <Text style={styles.textBar}> Average </Text>
                        <Progress.Bar progress={5299.136/10000} width={200} />
                        {/* <Text style={styles.pointsAddition}> +0 Points </Text> */}
                        </Animatable.View>

                        <Animatable.Text 
                            animation="bounceIn" 
                            style={styles.text}
                            delay={delaySeconds+200}
                            onPress={() => this.setModalVisible("comments",!this.state.modalcomments)}
                        >
                        Your Number of Comments: {this.props.data.MyComments}
                        </Animatable.Text>

                        <Animatable.Text 
                            animation="bounceIn" 
                            style={styles.textSecond}
                            delay={delaySeconds+200}
                            onPress={() => this.setModalVisible("comments",!this.state.modalcomments)}
                        >
                        This means you are in the {this.props.data.MyComments_percentile}th percentile
                        </Animatable.Text>


                        <Animatable.View
                            animation="bounceIn" 
                            style={styles.graph}
                            delay={delaySeconds+200}
                            > 
                        <Text style={styles.textBar}> Yours </Text>
                        <Progress.Bar progress={this.props.data.MyComments/1000} width={200} color={"red"} />
                        <Text style={styles.textBar}> Average </Text>
                        <Progress.Bar progress={165.1664/1000} width={200} />
                        <Text style={styles.pointsAddition}> +{this.props.data.MyComments_points } Points </Text>
                        </Animatable.View>

                       

                        <Animatable.Text 
                            animation="bounceIn" 
                            style={styles.text}
                            delay={delaySeconds+400}
                            onPress={() => this.setModalVisible("photos",!this.state.modalPhotos)}
                        >
                        Your Number of Photos: {this.props.data.Photos}
                        </Animatable.Text>

                        <Animatable.Text 
                            animation="bounceIn" 
                            style={styles.textSecond}
                            delay={delaySeconds+400}
                            onPress={() => this.setModalVisible("photos",!this.state.modalPhotos)}
                        >
                        This means you are in the {this.props.data.Photos_percentile}th percentile
                        </Animatable.Text>
                        


                        <Animatable.View
                            animation="bounceIn" 
                            style={styles.graph}
                            delay={delaySeconds+200}
                            > 
                        <Text style={styles.textBar}> Yours </Text>
                        <Progress.Bar progress={this.props.data.Photos/100} width={200} color={"red"} />
                        <Text style={styles.textBar}> Average </Text>
                        <Progress.Bar progress={12.89/100} width={200} />
                        <Text style={styles.pointsAddition}> +{this.props.data.Photos_points } Points </Text>
                        </Animatable.View>


                        {/* Friends */}

                        <Animatable.Text 
                            animation="bounceIn" 
                            style={styles.text}
                            delay={delaySeconds+600}
                            onPress={() => this.setModalVisible("friends",!this.state.modalFriends)}
                        >
                        Your Number of Friends: {this.props.data.Friends}
                        </Animatable.Text>

                        <Animatable.Text 
                            animation="bounceIn" 
                            style={styles.textSecond}
                            delay={delaySeconds+600}
                            onPress={() => this.setModalVisible("friends",!this.state.modalFriends)}
                        >
                        This means you are in the {this.props.data.Friends_percentile}th percentile
                        </Animatable.Text>
                        


                        <Animatable.View
                            animation="bounceIn" 
                            style={styles.graph}
                            delay={delaySeconds+200}
                            > 
                        <Text style={styles.textBar}> Yours </Text>
                        <Progress.Bar progress={this.props.data.Friends/100} width={200} color={"red"} />
                        <Text style={styles.textBar}> Average </Text>
                        <Progress.Bar progress={8.19/100} width={200} />
                        <Text style={styles.pointsAddition}> +{this.props.data.Friends_points } Points </Text>
                        </Animatable.View>

                        {/* user_comments */}

                        <Animatable.Text 
                            animation="bounceIn" 
                            style={styles.text}
                            delay={delaySeconds+800}
                            onPress={() => this.setModalVisible("userComments",!this.state.modalUserComments)}
                        >
                        Your Number of User Comments: {this.props.data.UserComments}
                        </Animatable.Text>

                        <Animatable.Text 
                            animation="bounceIn" 
                            style={styles.textSecond}
                            delay={delaySeconds+800}
                            onPress={() => this.setModalVisible("userComments",!this.state.modalUserComments)}
                        >
                        This means you are in the {this.props.data.Ucommens_percentile}th percentile
                        </Animatable.Text>
                        


                        <Animatable.View
                            animation="bounceIn" 
                            style={styles.graph}
                            delay={delaySeconds+800}
                            > 
                        <Text style={styles.textBar}> Yours </Text>
                        <Progress.Bar progress={this.props.data.UserComments/100} width={200} color={"red"} />
                        <Text style={styles.textBar}> Average </Text>
                        <Progress.Bar progress={167.49/100} width={200} />
                        <Text style={styles.pointsAddition}> +{this.props.data.Ucomments_points } Points </Text>
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
                        visible={this.state.modalBlogTraffic}
                        onRequestClose={() => {alert("Modal has been closed.")}}
                        
                        
                    >
                    <View style={styles.textViewModal}>
                        <Text
                        onPress={() => this.setModalVisible("blogTraffic",false)}
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

                 {/* Friends */}
                 <Animatable.View 
                            animation="bounceIn" 
                            //style={styles.text}
                            delay={1000}
                            onPress={() => this.setModalVisible(!this.state.modalFriends)}
                        >
                       
                
                <View style={styles.modal}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalFriends}
                        onRequestClose={() => {alert("Modal has been closed.")}}
                        
                        
                    >
                    <View style={styles.textViewModal}>
                        <Text
                        onPress={() => this.setModalVisible("friends",false)}
                        > Users that have less friends than average usually feel more lonely and experience more boredom, which are direct signs of depression
</Text>
                    </View>
                    </Modal>
                </View>
                </Animatable.View>
                {/* UComments */}
                <Animatable.View 
                            animation="bounceIn" 
                            //style={styles.text}
                            delay={1000}
                            onPress={() => this.setModalVisible(!this.state.modalUserComments)}
                        >
                       
                
                <View style={styles.modal}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalUserComments}
                        onRequestClose={() => {alert("Modal has been closed.")}}
                        
                        
                    >
                    <View style={styles.textViewModal}>
                        <Text
                        onPress={() => this.setModalVisible("userComments",false)}
                        >Users that comment more often than average on other people’s posts may feel that this directs their attention away from the user’s own loneliness since selflessness sometimes translates to self-loathing.

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

                
                

                <MessageBarAlert ref="alert" />
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
    const { data } = state.games;
    return {
        data
    };
};

export default connect(mapStateToProps,mapDispatchToProps )(UserInfo);
//export default LoginRedux;